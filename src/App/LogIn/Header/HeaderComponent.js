import  React, {Component} from 'react';
import  './style.css';
import  logo from './download.png';

class LoginHeader extends React.Component {
    render(){
        return (
            <div className="clearfix">
                 <div className="logo-wrap">
                          <img src={logo} alt="logo"/>
                 </div>
                  <ul className="tabs-wrap clearfix">
                      <li><h2>SignUp</h2></li>
                      <li className="active"><h2>SignIn </h2></li>
                  </ul>
            </div>
        )
    }
}

export default LoginHeader;