import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BookList from './App/BookList/components/bookList'
import Nav from './App/Nav/components/sideNav'

ReactDOM.render(
    // <LoginContainer/>, 
     <div className="book-listing-wrap clearfix">
        <Nav/>
        <div className="right-wrap">
            <BookList/>
        </div>
     </div>,
     document.getElementById("app")
);
