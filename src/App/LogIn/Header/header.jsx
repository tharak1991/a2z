import React from 'react';
import ReactDOM from 'react-dom';

class loginHeader extends from React.Component{
    render(){
        return (
            <div>
                <ul className="tabs-wrap">
                    <li><h2>SIGN UP</h2></li>
                    <li className="active"><h2>SIGN IN</h2></li>
                </ul>
            </div>
        )
    }
}

export default loginHeader