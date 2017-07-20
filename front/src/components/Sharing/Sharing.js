// IMPORT DES PACKAGES ET LIBRAIRIES
import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

// IMPORT DES FICHIERS CSS 
import './Sharing.css';

// DECLARATION DES CONSTANTES
// Boutons
const {
  FacebookShareButton,
  TwitterShareButton,
} = ShareButtons;
// Compteurs
const {
  FacebookShareCount,
} = ShareCounts;
// Icônes
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

// DECLARATION DES VARIABLES
let shareUrl = "http://www.boitamoscato.fr/";
let shareTitle = "La boîte à Moscato";
let shareDescription = "Bien fait pour vos gueules!";
let shareTwitterUser = "nikogoirand";
let shareTwitterHashtags = ["boitamoscato"];
let sharePictureUrl = "http://www.boitamoscato.fr/images/share_fb.jpg";

// CLASS SHARING
export default class Sharing extends Component {
	render(){
		return(
			<div id="sharing">
				<ul>
					<li>
						<FacebookShareButton children="" url={shareUrl} title={shareTitle} description={shareDescription} picture={sharePictureUrl}>
							<FacebookIcon size={32} round={true} />
							<FacebookShareCount url="http://www.boitamoscato.fr/index.html" />
						</FacebookShareButton>
					</li>
					<li>
						<TwitterShareButton children="" url={shareUrl} title={shareTitle} description={shareDescription} via={shareTwitterUser} hashtags={shareTwitterHashtags}>
							<TwitterIcon size={32} round={true} />
						</TwitterShareButton>
					</li>
				</ul>
			</div>
		);
	}

}