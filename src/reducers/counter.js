import { ADD_COUNTER, SUBTRACT_COUNTER } from '../constants';

const counter = (state = 0, action) => {
    switch (action.type) {
    case ADD_COUNTER:
        return state + 1;

    case SUBTRACT_COUNTER:
        return state - 1;

    default:
        return state;
    }
};

export default counter;
