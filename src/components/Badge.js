import React from 'react';

import logoConf from '../images/badge-header.svg';
import avatar from '../images/Jorgelisapa.jpeg';


 class Badge extends React. Component {
    render() {
        return <div>
            <div>
                <img src={logoConf} alt= 'Logo de la Conf'/>
            </div>
            <div>
                <img src={avatar} alt= 'Avatar'/>
                <h1>Jorge <br/> Salamanca </h1>
            </div>
            <div>
                <p>Software engineering student and first generation PlatziMaster. Support as a class mentor in EmpoderaTech and Platzi projects. Frontend Dev with JavaScript.</p>
                <p>
                    @Jorgelisapa
                </p>
            </div>
            <div>
                <p>
                    #PlatziConf2020
                </p>
            </div>
        </div>
    }
 }

 export default Badge;