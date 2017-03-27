import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {browserHistory} from 'react-router-dom'
import {LoginContainer} from './App/LogIn/index'
import {BookList} from './App/BookList/components/bookList'
import path from 'path'
window.alert(Router)

ReactDOM.render(
      <Router >
            <Route path="/"  component={LoginContainer}/>
      </Router>,
     document.getElementById("app")
);
