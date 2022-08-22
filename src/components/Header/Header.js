import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Header.css"

const Header = (props) => {

    var home = "/"

    if(props.loggedIn){
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

export default connect((state) => ({
    loggedIn: state.loggedIn,
}))(Header);
