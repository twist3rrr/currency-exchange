// Redux
import { combineReducers } from 'redux';
// Reducers
import rates from './rates';

const rootReducer = combineReducers({
    rates,
});

export default rootReducer;
