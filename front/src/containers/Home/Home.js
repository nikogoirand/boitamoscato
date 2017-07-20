// IMPORT DES PACKAGES ET LIBRAIRIES
import React, { Component } from 'react';

// IMPORT DES COMPOSANTS
import Header from '../../components/Header/Header';
import SoundboxContainer from '../../components/Soundbox/SoundboxContainer/SoundboxContainer';


// CLASS HEADER
export default class Home extends Component {
    render() {
        return (
        	<div>
				<Header />
				<SoundboxContainer />
			</div>
        )
    }
}
