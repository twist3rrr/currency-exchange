import { ADD_COUNTER, SUBTRACT_COUNTER } from '../constants';

export const addCounter = () => {
    return dispatch => (
        dispatch({
            type: ADD_COUNTER,
        })
    );
};

export const subtractCounter = () => {
    return dispatch => (
        dispatch({
            type: SUBTRACT_COUNTER,
        })
    );
};
