import React from 'react';
import {Link} from 'react-router-dom'
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Link to="/"  style={{ textDecoration: 'none' }}>
                <img className="Shell-logo" src={Shell_Logo} alt="Shell Logo"/>
            </Link>
        </div>
    );
}

export default Header;
