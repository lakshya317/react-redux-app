import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Landing.css'
import Header from "../Header/Header"
import { ReactComponent as ReactLogo } from '../../images/React.svg';
import { ReactComponent as ReduxLogo } from '../../images/Redux.svg';
import ErrorModal from '../Modal/ErrorModal';
import { removeDisplayError } from "../../action/displayError"


const Landing = (props) => {

    //Redux State
    const displayError = useSelector((state) => state.displayError)

    //dispatch
    const dispatch = useDispatch()

    return (
        <div className='landing'>
            <ErrorModal errormessage={displayError} onHide={() => {dispatch(removeDisplayError());}} />
            <Header />
            <div className='landing-body'>
                <div className='landing-title'>
                    Welcome to a Login Screen made using
                </div>
                <div className="stack-container">
                    <div className='stack-group'>
                        <ReactLogo height={"100px"} width={"100px"} title={"React Logo"}/>
                        <div className="stack-title">
                            React
                        </div>
                    </div>
                    <div className='stack-group'>
                        <ReduxLogo height={"100px"} width={"100px"} title={"ReduxLogo"}/>
                        <div className="stack-title">
                            Redux
                        </div>
                    </div>
                </div>
                <div className="login-button-container">
                    <Link className='login-link' to="/login" style={{ textDecoration: 'none' }}>
                        <div className='login-link-button'>
                            Login
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
