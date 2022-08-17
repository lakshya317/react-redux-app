import React from 'react';
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img className="Shell-logo" src={Shell_Logo} alt="Shell Logo"/>
        </div>
    );
}

export default Header;
