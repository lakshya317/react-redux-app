import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./AuthPage.css";
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import ErrorModal from '../Modal/ErrorModal';
import { setDisplayError, removeDisplayError } from '../../action/displayError';

const AuthPage = () => {
    //Redux State
    const {loggedIn, displayError} = useSelector((state) => ({loggedIn:state.loggedIn, displayError: state.displayError}));
    //Dispatch
    const dispatch = useDispatch();

    if(!loggedIn){
        dispatch(setDisplayError("Login to continue"));
        return <Navigate to="/react-redux-app/login" replace/>
    }

    return (
        <div className="main-container">
            <ErrorModal errormessage={displayError} onHide={() => {dispatch(removeDisplayError());}} />
            <Header/>
            <div className="main-body">
                <SideBar/>
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthPage;
