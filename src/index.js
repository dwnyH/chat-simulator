import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
