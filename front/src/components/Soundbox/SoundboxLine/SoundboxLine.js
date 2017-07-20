// IMPORT DES PACKAGES ET LIBRAIRIES
import React, { Component } from 'react';

// IMPORT DES DONNEES
import { sounds } from '../SoundboxData/SoundboxData'

// IMPORT DES FICHIERS CSS 
import './SoundboxLine.css';


// CLASS HEADER
export default class SoundboxLine extends Component {
	render(){
        return (
            <div>
                {sounds.map(function(sound, index){
                    return(
                		<div className="lineContent" key={index}>
	 						<div className="num">
	 							<span className="text">{index}</span>
	 						</div>
	 						<div className="info">
	 							<div className="contentInfo">
	 								<span className="hashtag">#{sound.hashtag}</span>
	 								<span className="text">&laquo;&nbsp;{sound.quote}&nbsp;&raquo;</span>
	 							</div>
	 						</div>
	 						<div className="picto"></div>
	 						<div className="loader"></div>
	 					</div>
                    )
                  })}
            </div>
        )
	}
}
