import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {cattle} from './redux/reducers';


declare global {
    interface Window {
        cow: any;
    }
}

const reducers = combineReducers({
  cattle
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

window.cow = window.cow || {};
window.cow.store = store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-cow'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
