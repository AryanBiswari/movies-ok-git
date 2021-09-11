import React from 'react'
import "./Login.css";
import logo from "./movies-ok-logo.png";
function Login() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src={logo} alt="logo"/>
                <button onClick="" className="loginScreen__button">Sign In</button>
            </div>
        </div>
    )
}

export default Login
