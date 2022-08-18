import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import "./Dashboard.css"
import {handleLogout} from "../../action/shared"

const Dashboard = (props) => {
    if(!props.loggedIn){
        return(<Redirect push to="/" />)
    }

    return (
        <div className="dashboard">
            <Header/>
            <div className='dashboard-body'>
                <div className="dash-title">
                    <span className="welcome">Welcome</span>
                    <span className="user-title">{props.authUser}</span>
                    <span className="welcome">!</span>
                </div>
                <div className="logout-button-container">
                    <Link to="/" style={{ textDecoration: 'none' }} onClick={() => {props.dispatch(handleLogout())}}>
                        <div className="logout-link-button">
                            Logout
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default connect((state)=>({
    loggedIn: state.loggedIn,
    authUser: state.authUser
}))(Dashboard);