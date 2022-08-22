import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import "./Dashboard.css"
import {handleLogout} from "../../action/authentication"

const Dashboard = (props) => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(!props.loggedIn){
            navigate("/login")
        }
    }, [navigate, props.loggedIn])

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
                    <Link to="/" style={{ textDecoration: 'none' }} className="logout-link" onClick={() => {props.dispatch(handleLogout())}}>
                        <div className='logout-link-button'>
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