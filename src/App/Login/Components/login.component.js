import React, {Component} from 'react'
import logo from './download'

class LoginComponent extends React.Component {
    render(){
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
            </div>
    }
}