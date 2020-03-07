import React from 'react';

import './styles/Badge.css';

import logoConf from '../images/badge-header.svg';
import avatar from '../images/Jorgelisapa.jpeg';


 class Badge extends React. Component {
    render() {
        return <div className= 'Badge'>
            <div className= 'Badge__header'>
                <img src={logoConf} alt= 'Logo de la Conf'/>
            </div>
            <div className= 'Badge__section-name'>
                <img className= 'Badge__avatar' src={avatar} alt= 'Avatar'/>
                <h1>Jorge <br/> Salamanca </h1>
            </div>
            <div className= 'Badge__section-info' >
                <p>Software engineering student and first generation PlatziMaster. Support as a class mentor in EmpoderaTech and Platzi projects. Frontend Dev with JavaScript.</p>
                <div>
                    @Jorgelisapa
                </div>
            </div>
            <div className= 'Badge__footer'>
                <p>
                    #PlatziConf2020
                </p>
            </div>
        </div>
    }
 }

 export default Badge;