import  React, {Component} from 'react';
import  * as header from './style.css';

// let logo = require('./download');
class LoginHeader extends React.Component {
    render(){
        return (
            <div>
               <div className={header.logo-wrap}>
                    sdsdsdsdsdsdsdsd
                </div>
                <ul className={header.tabs-wrap}>
                    <li><h2>SignUp</h2></li>
                    <li className={header.active}><h2>SignIn</h2></li>
                </ul>
            </div>
        )
    }
}

export default LoginHeader;