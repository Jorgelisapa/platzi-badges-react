import React from 'react';

import './styles/Badge.css';

import logoConf from '../images/badge-header.svg';
/* import avatarUrl from '../images/Jorgelisapa.jpeg'; */

 class Badge extends React.Component {
    render() {


        return <div className= 'Badge'>
            <div className= 'Badge__header'>
                <img src={logoConf} alt= 'Logo de la Conf'/>
            </div>
            <div className= 'Badge__section-name'>
                <img className= 'Badge__avatar' src={this.props.avatarUrl} alt= 'Avatar'/>
                <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
            </div>
            <div className= 'Badge__section-info' >
                {
                this.props.jobTitle}
                <div>
                @{this.props.twitter}
                </div>
            </div>
            <div className= 'Badge__footer'>
                <p>
                {this.props.hash}
                </p>
            </div>
        </div>
    }
 }

 export default Badge;