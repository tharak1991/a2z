import  React, { Component } from 'react';
import  SignIn from './SignIn/SignIn';
import  SignUp from './SignUp/SignUp';
import  logo from './download.png';
import  './style.css';

class Login extends React.Component{
    render(){
        return(
            <div className="login-wrap">
                <div className="clearfix">
                    <div className="logo-wrap">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className="tabs-wrap clearfix">
                        <li><h2 className= {this.state.toggleCheck ? '' : 'active'} onClick={this.state.showPanel}>SignUp</h2></li>
                        <li><h2 className= {this.state.toggleCheck ? 'active' : ''} onClick={this.state.showPanel}>SignIn</h2></li>
                    </ul>
                </div>
                {panelWrap}
            </div>
        )
    }
}


export default Login