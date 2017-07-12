import axios from 'axios';

export function setNewToken(accessToken, expiresIn){
	let accessTokenExpirationDate = new Date();
	accessTokenExpirationDate.setDate(accessTokenExpirationDate.getDate() + (expiresIn/60/60/24));

	localStorage.setItem("accessToken", accessToken);
	localStorage.setItem("accessTokenExpirationDate", accessTokenExpirationDate.getTime());
	axios.defaults.headers.common['Authorization'] = 'Bearer '+accessToken;
}

export function refreshToken(callbackOnSuccess, callbackOnFail){
	return new Promise(resolve => {
		axios.get(process.env.REACT_APP_API_URL+'auth/refresh', {
	    	withCredentials: true
		})
		.then(function(response){
			setNewToken(response.data.access_token, response.data.expires_in);

			if(isFunction(callbackOnSuccess)){
				// On appelle la fonction de callback
				callbackOnSuccess(response);
			}else{
				console.error("Aucune fonction de callbackOnSuccess fournie.");
				console.error(callbackOnSuccess);
			}
		})
		.catch(function (error) {
			if(error.response === undefined)
				console.error("Unknown error : "+error);
			else if (error.response.status === 400) {
	        	callbackOnFail()
	    	}				
		})
	});
}

export async function assertUserIsConnected(callbackOnSuccess, callbackOnFail){
	let accessTokenExpirationDate = localStorage.getItem('accessTokenExpirationDate');
	let now = new Date();

	if(accessTokenExpirationDate <= now.getTime()){
		console.log("Access token à rafraichir");
		await refreshToken(callbackOnSuccess, callbackOnFail);
	}else{
		console.info("Access token valide");
	}
}

function isFunction(functionToCheck) {
 var getType = {};
 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}