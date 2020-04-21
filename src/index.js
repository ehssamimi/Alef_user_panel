import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import UserProvider from "./Components/Common/Context/UserProvider";
import BuyProvider from "./Components/Common/Context/BuyProvider";
import UrlProvider from "./Components/Common/Context/UrlProvider";
 render(
    <BrowserRouter>
        <UserProvider>
            <BuyProvider  >
            <App />
            </BuyProvider>
        </UserProvider>



    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
