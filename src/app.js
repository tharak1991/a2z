import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {browserHistory, hashHistory } from 'react-router-dom'
import {Login} from './App/Components/Login/login.component'
import path from 'path'

ReactDOM.render(
    <Login/>,
     document.getElementById("app")
)