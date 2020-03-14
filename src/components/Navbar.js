import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'
import logo from '../images/logo.svg';

class NavBar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <div className='containerfluid'></div>
                <Link className='Navbar__brand' to='/'>
                    <img className='Navbar__brand-logo' src={logo} alt='logo' />
                    <span className='font-weight-ligth'>Platzi</span>
                    <span className='font-weight-bold'>Conf</span>
                </Link>
            </div>
        )
    }
}

export default NavBar;