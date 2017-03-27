import  React, { Component } from 'react';
import  SignIn from './SignIn/SignIn';
import  SignUp from './SignUp/SignUp';
import  logo from './download.png';
import  './style.css';

export class LoginContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            toggleCheck: false,
            showPanel: this.showPanel.bind(this)
        }
    }

    showPanel(){
        this.setState({
            toggleCheck: !this.state.toggleCheck
        })
    }
  
    render(){
        let panelWrap = null;
        if(this.state.toggleCheck) {
            panelWrap = <SignIn/>;
        } else{
            panelWrap = <SignUp/>;
        }
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



