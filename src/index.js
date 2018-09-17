import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import './index.css';
// Redux provider
import { Provider } from 'react-redux';
// Component
import App from './App';
// Store
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
