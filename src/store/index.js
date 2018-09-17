// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Logger
import logger from 'redux-logger';
// Root reducer
import reducer from '../reducers';

const enhancer = applyMiddleware(
    thunk,
    logger,
);

export default createStore(reducer, {}, enhancer);
