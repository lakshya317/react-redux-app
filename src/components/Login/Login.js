import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'
import Header from '../Header/Header';
import LoadingAnimation from '../Loading/Loading';
import ErrorModal from '../Modal/ErrorModal';
import Shell_Logo from "../../assets/images/Shell_Logo.png"
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

const Login = () => {
    //state
    const [email, setEmail] = useState(initialState.email);
    const [password, setPassword] = useState(initialState.password);
    const [isEmailValid, setIsEmailValid] = useState(initialState.isEmailValid);
    const [isPasswordValid, setIsPasswordValid] = useState(initialState.isPasswordValid);
    const [errorEmail, setErrorEmail] = useState(initialState.errorEmail);
    const [errorPassword, setErrorPassword] = useState(initialState.errorPassword);

    //Redux State
    const loggedIn = useSelector((state) => state.loggedIn)
    const displayError = useSelector((state) => state.displayError)
    const loading = useSelector((state) => state.loading)

    //dispatch
    const dispatch = useDispatch()

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
            dispatch(handleLogin(email, password));
        }
    }

    //Returns

    if(loggedIn){
        return <Navigate to="/react-redux-app/home" replace/>
    }

    return (
        <div className="login-container">
            <ErrorModal errormessage={displayError} onHide={() => {dispatch(removeDisplayError());}} />
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
                                loading ? 
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

export default Login;
