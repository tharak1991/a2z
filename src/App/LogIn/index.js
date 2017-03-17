import  React, { Component } from 'react';
import  LoginHeader from './Header/HeaderComponent';
import style from './style.css';

class LoginContainer extends React.Component{
    render(){
        return(
            <div className="login-wrap">
                <div>
                    <div className="logo-wrap">
                            <img  alt="a2z reading app"/>
                    </div>
                     <ul className="tabs-wrap">
                        <li><h2>SignUp</h2></li>
                        <li className="active"><h2 >SignIn</h2></li>
                    </ul>
                 </div>
            </div>
        )
    }
}


export default LoginContainer;
