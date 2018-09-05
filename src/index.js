import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './dux/store';

import './reset.css';
import './index.css';
import App from './App';

ReactDOM.render(

    <Provider store={ store }> 
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

, document.getElementById('root'));

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();