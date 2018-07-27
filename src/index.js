import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import React from 'react';
import Game from "./Game";
import './index.css';
import store from "./store"


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
