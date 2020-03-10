import React from 'react';

import './styles/Navbar.css'
import logo from '../images/logo.svg';

class NavBar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='containerfluid'></div>
                <a className='Navbar__brand' href='/'>
                    <img className='Navbar__brand-logo' src={logo} alt='logo' />
                    <span className='font-weight-ligth'>Platzi</span>
                    <span className='font-weight-bold'>Conf</span>
                </a>
            </div>
        )
    }
}

export default NavBar;