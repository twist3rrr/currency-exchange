import { AC, AC_STATE } from '../constants';

const initialState = {
    error: null,
    isLoading: true,
    rates: null,
};

const rates = (state = initialState, action) => {
    const { FAILURE, SUCCESS } = AC_STATE;
    const { FETCH_RATES, IS_LOADING } = AC;

    const { payload, type } = action;

    switch (type) {
    case FETCH_RATES + SUCCESS:
        return {
            ...state,
            error: null,
            exchangeRates: payload.exchangeRates,
            isLoading: payload.isLoading,
        };
    case FETCH_RATES + FAILURE:
        return {
            ...state,
            error: payload.error,
            isLoading: payload.isLoading,
        };
    case IS_LOADING:
        return {
            ...state,
            isLoading: payload.isLoading,
        };
    default:
        return state;
    }
};

export default rates;
