import React from 'react';

import './styles/Badge.css';
import logoConf from '../images/badge-header.svg';
import Gravatar from './Gravatar';

 class Badge extends React.Component {
    render() {


        return <div className= 'Badge'>
            <div className= 'Badge__header'>
                <img src={logoConf} alt= 'Logo de la Conf'/>
            </div>
            <div className= 'Badge__section-name'>
                <Gravatar
                    className= 'Badge__avatar' 
                    email= {this.props.email} 
                    alt= 'Avatar'
                />
                <h1>
                    {this.props.firstName} <br/> 
                    {this.props.lastName} 
                </h1>
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