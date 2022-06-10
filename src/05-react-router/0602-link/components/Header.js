import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <nav style={{display: 'flex', gap: '2rem'}}>
                {/* <Link to="/">Home</Link><Link to="sobre">Sobre</Link> */}
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="sobre">Sobre</NavLink>
                <NavLink to="login">Login</NavLink>
            </nav>
        </header>
    );

}

export default Header;