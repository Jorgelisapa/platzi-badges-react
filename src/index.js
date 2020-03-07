// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

import Badge from './components/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badge 
    firstName='Jota' 
    lastName='Salamanca'
    jobTitle='FrontEnd'
    twitter='Jorgelisapa'
    hash='#PlatziConf2020'
    />, container);
