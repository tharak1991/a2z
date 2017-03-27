import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {browserHistory, hashHistory } from 'react-router-dom'
import {LoginContainer} from './App/LogIn/index'
import path from 'path'


ReactDOM.render(
    <Router>
       <Route path="/"  component={LoginContainer}/>
    </Router>,
     document.getElementById("app")
);
