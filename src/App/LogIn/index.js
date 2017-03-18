import  React, { Component } from 'react';
import  LoginHeader from './Header/HeaderComponent';
import  './style.css';

class LoginContainer extends React.Component{
    render(){
        return(
            <div className="login-wrap">
                <LoginHeader/>
            </div>
        )
    }
}


export default LoginContainer;
