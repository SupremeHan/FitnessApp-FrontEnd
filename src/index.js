import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './app/App';

const root = document.getElementById('root');
render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
