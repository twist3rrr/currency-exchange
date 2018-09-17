import { combineReducers } from 'redux';
import counter from './counter';
import rates from './rates';

const rootReducer = combineReducers({
    counter,
    rates,
});

export default rootReducer;
