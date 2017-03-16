import React from 'react';
import ReactDOM from 'react-dom';
import loginHeader from 'LogIn/Header/header';


var App = React.createClass({
    render: function () {
        return (
            <div>
               <p>Hello</p>
            </div>
        );
    }
});

ReactDOM.render(<loginHeader/>,  document.getElementById("app"));
