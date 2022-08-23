import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import LoadingAnimation from '../Loading/Loading';
import "./Dashboard.css"
import {handleLogout} from "../../action/authentication"

const Dashboard = () => {
    //Redux State
    const loggedIn = useSelector((state) => state.loggedIn)
    const authUser = useSelector((state) => state.authUser)
    const loading = useSelector((state) => state.loading)

    //dispatch
    const dispatch = useDispatch()

    if(!loggedIn){
        return <Navigate to="/react-redux-app/login" replace/>
    }

    return (
        <div className="dashboard">
            <Header/>
            {
                loading ? <LoadingAnimation/> :
                <div className='dashboard-body'>
                    <div className="dash-title">
                        <span className="welcome">Welcome</span>
                        <span className="user-title">{authUser}</span>
                        <span className="welcome">!</span>
                    </div>
                    <div className="logout-button-container">
                        <Link to="/" style={{ textDecoration: 'none' }} className="logout-link" onClick={() => {dispatch(handleLogout())}}>
                            <div className='logout-link-button'>
                                Logout
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default Dashboard