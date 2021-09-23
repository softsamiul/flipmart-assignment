import React from 'react';
import logo from '../../images/flipmart.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo-area">
                <img className="logo" src={logo} alt="" />
            </div>
            <nav className="menu">
                <a className="menu-item" href="/shop">Shop</a>
                <a className="menu-item" href="/categories">Categories</a>
                <a className="menu-item" href="/trending">Trending</a>
                <a className="menu-item" href="/about">About us</a>
                <a className="menu-item" href="/contact">Contact us</a>
            </nav>
        </header>
    );
};

export default Header;