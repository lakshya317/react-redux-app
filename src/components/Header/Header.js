import React from 'react';
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Header.css"

const Header = (props) => {

    //Redux State
    const loggedIn = useSelector((state) => state.loggedIn);

    var home = "/"

    if(loggedIn){
        home = "/home"
    }

    return (
        <div className="header">
            <Link to={home}  style={{ textDecoration: 'none' }}>
                <img className="Shell-logo" src={Shell_Logo} alt="Shell Logo"/>
            </Link>
        </div>
    );
}

export default Header;
