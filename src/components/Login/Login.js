import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Shell_Logo from "../../images/Shell_Logo.png"
import "./Login.css"
import {handleLogin} from "../../action/shared"

const initialState = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    isEmailValid: true,
    isPasswordValid: true,
    errorEmail: "",
    errorPassword: ""
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    };

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState((prevState) => {
            let newState = prevState;
            newState[name] = value;
            return newState;
        }, () => {
            if(!(this.state.isEmailValid && this.state.isPasswordValid)){
                this.checkValidity()
            }
        })
    }

    checkValidity = () => {
        const username = this.state.email;
        const password = this.state.password;
        let emailValid = false;
        let passValid = false;

        if(username === ""){
            this.setState((prevState) => {
                let newState = prevState;
                newState.isEmailValid = false;
                newState.errorEmail = "Username is Required"
                return newState;
            })
        }

        else{
            let email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
            if(username.toLowerCase().match(email_re)){
                this.setState((prevState) => {
                    let newState = prevState;
                    newState.isEmailValid = true;
                    return newState;
                })
                emailValid = true;
            }

            else{
                this.setState((prevState) => {
                    let newState = prevState;
                    newState.isEmailValid = false;
                    newState.errorEmail = "Invalid Username"
                    return newState;
                })
            }
        }

        if(password === ""){
            this.setState((prevState) => {
                let newState = prevState;
                newState.isPasswordValid = false;
                newState.errorPassword = "Password is Required"
                return newState;
            })
        }

        else{
            if(password.length >= 8){
                this.setState((prevState) => {
                    let newState = prevState;
                    newState.isPasswordValid = true;
                    return newState;
                })
                passValid = true;
            }

            else{
                this.setState((prevState) => {
                    let newState = prevState;
                    newState.isPasswordValid = false;
                    newState.errorPassword = "Password is too short"
                    return newState;
                })
            }
        }

        return emailValid && passValid
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.checkValidity()){
            this.props.dispatch(handleLogin(this.state.email, this.state.password));
        }
    }

    render() {
        if(this.props.loggedIn){
            // history.push("/home");
            return(<Redirect push to="/home" />)
        }

        return (
            <div className="login-container">
                <Header />
                <div className='login-body'>
                    <div className='login-form-container'>
                        <div className="form-box">
                            <form className="form" onSubmit={this.handleSubmit}>
                                <input 
                                    className={`input-field${this.state.isEmailValid?"":" invalid-input"}`} 
                                    name="email" 
                                    value={this.state.email} 
                                    type="text" 
                                    placeholder='Email Address *' 
                                    onChange = {this.handleChange}
                                />
                                {
                                    this.state.isEmailValid? null
                                    : <span className="input-error">{this.state.errorEmail}</span>
                                }
                                <input 
                                    className={`input-field${this.state.isPasswordValid?"":" invalid-input"}`}
                                    name="password" 
                                    value={this.state.password} 
                                    type="password" 
                                    placeholder='Password *' 
                                    onChange = {this.handleChange}
                                />
                                {
                                    this.state.isPasswordValid? null
                                    : <span className="input-error">{this.state.errorPassword}</span>
                                }
                                <input className="login-button" type="submit" />
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
}

export default connect((state)=>({
    loggedIn: state.loggedIn
}))(Login);
