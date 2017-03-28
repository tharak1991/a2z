import React from 'react'
import ReactDOM from 'react-dom'
import LoginContainer from './App/LogIn/index'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducres} from "./Reducers/index";

const store = createStore(reducres);

ReactDOM.render(
    <Provider store={store}>
        <LoginContainer/>
    </Provider>,
    document.getElementById('app')
)