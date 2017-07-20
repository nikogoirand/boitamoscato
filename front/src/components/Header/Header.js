// IMPORT DES PACKAGES ET LIBRAIRIES
import React, { Component } from 'react';
import Sharing from '../Sharing/Sharing';

// IMPORT DES FICHIERS CSS 
import './Header.css';


// CLASS HEADER
export default class Header extends Component {
    render() {
        return (
			<div id="header">
				<h1 className="title">&nbsp;</h1>
				<div className="wrap">
					<span className="credit">
						<a href="https://twitter.com/nikogoirand" className="linkToTwitter" target="_blank" rel="noopener noreferrer">@nikogoirand</a>
					</span>
					<span className="inspire">
						Librement inspir&eacute; de <a href="http://boitamocky.neuviemepage.com/" className="linkToSite" target="_blank" rel="noopener noreferrer">#boitamocky</a>
						&nbsp;et&nbsp;
						<a href="http://boitalopez.neuviemepage.com/" className="linkToSite" target="_blank" rel="noopener noreferrer">#boitalopez</a>
						&nbsp;de&nbsp;
						<a href="https://twitter.com/neuviemepage" className="linkToTwitter" target="_blank" rel="noopener noreferrer">@neuviemepage</a>
					</span>
					<span className="copyright">&copy; RMC - <a href="https://twitter.com/moscato_show" target="_blank" rel="noopener noreferrer">Super Moscato Show</a></span>
				</div>
				<Sharing />
			</div>
        );
    }
}
