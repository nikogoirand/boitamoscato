// IMPORT DES PACKAGES ET LIBRAIRIES
import React, { Component } from 'react';

// IMPORT DES COMPOSANTS
import SoundboxLine from '../SoundboxLine/SoundboxLine';

// IMPORT DES FICHIERS CSS 
import './SoundboxContainer.css';


// CLASS HEADER
export default class SoundboxContainer extends Component {
    render() {
        return (
			<div id="content">
				<SoundboxLine />
			</div>
        );
    }
}
