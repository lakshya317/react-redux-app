import React, { useCallback, useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Header from '../Header/Header';
import LoadingAnimation from '../Loading/Loading';
import ErrorModal from '../Modal/ErrorModal';
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Login.css"
import {handleLogin} from "../../action/authentication"
import {removeDisplayError} from "../../action/displayError"

const initialState = {
    email: "eve.holt@reqres.in",
    password: "12345678",
    isEmailValid: true,
    isPasswordValid: true,
    errorEmail: "",
    errorPassword: ""
}

const Login = (props) => {

    const [email, setEmail] = useState(initialState.email);
    const [password, setPassword] = useState(initialState.password);
    const [isEmailValid, setIsEmailValid] = useState(initialState.isEmailValid);
    const [isPasswordValid, setIsPasswordValid] = useState(initialState.isPasswordValid);
    const [errorEmail, setErrorEmail] = useState(initialState.errorEmail);
    const [errorPassword, setErrorPassword] = useState(initialState.errorPassword);

    // Navigation
    const navigate = useNavigate();

    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if(name === "email"){
            setEmail(value);
        }

        else if(name === "password"){
            setPassword(value)
        }
    }

    const checkValidity = useCallback(() => {
        const username = email;
        const pass = password;
        let emailValid = false;
        let passValid = false;

        if(username === ""){
            setIsEmailValid(false);
            setErrorEmail("Username is Required");
        }

        else{
            let email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if(username.toLowerCase().match(email_re)){
                setIsEmailValid(true);
                emailValid = true;
            }

            else{
                setIsEmailValid(false);
                setErrorEmail("Invalid Username");
            }
        }

        if(pass === ""){
            setIsPasswordValid(false);
            setErrorPassword("Password is Required");
        }

        else{
            if(pass.length >= 8){
                setIsPasswordValid(true);
                passValid = true;
            }

            else{
                setIsPasswordValid(false);
                setErrorPassword("Password is too short");
            }
        }

        return emailValid && passValid
    },[email, password])

    // Use Effect to check Validity after Email/Password have been marked invalid once
    useEffect(()=>{
        if(!(isEmailValid && isPasswordValid)){
            checkValidity();
        }
    }, [email, password, checkValidity, isEmailValid, isPasswordValid]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(checkValidity()){
            props.dispatch(handleLogin(email, password));
        }
    }

    //Returns

    useEffect(()=>{
        if(props.loggedIn){
            navigate("/home")
        }
    }, [navigate, props.loggedIn])

    return (
        <div className="login-container">
            <ErrorModal errormessage={props.displayError} onHide={() => {props.dispatch(removeDisplayError());}} />
            <Header />
            <div className='login-body'>
                <div className='login-form-container'>
                    <div className="form-box">
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                                className={`input-field${isEmailValid?"":" invalid-input"}`} 
                                name="email" 
                                value={email} 
                                type="text" 
                                placeholder='Email Address *' 
                                onChange = {handleChange}
                            />
                            {
                                isEmailValid? null
                                : <span className="input-error">{errorEmail}</span>
                            }
                            <input 
                                className={`input-field${isPasswordValid?"":" invalid-input"}`}
                                name="password" 
                                value={password} 
                                type="password" 
                                placeholder='Password *' 
                                onChange = {handleChange}
                            />
                            {
                                isPasswordValid? null
                                : <span className="input-error">{errorPassword}</span>
                            }
                            {
                                props.loading ? 
                                <div className='login-button'>
                                    <LoadingAnimation variant="light" size="sm"/>
                                </div> :
                                <input className="login-button" type="submit" />
                            }
                        </form>
                    </div>
                </div>
                <div className='watermark-container'>
                    <img className="shell-watermark" src={Shell_Logo} alt="Shell Logo" />
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        displayError: state.displayError,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(Login);
