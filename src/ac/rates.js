import url from 'url';

import { AC, AC_STATE, EXCHANGE_API_URL } from '../constants';

export default ({ currency, date }) => {
    const { FAILURE, SUCCESS } = AC_STATE;
    const { FETCH_RATES, IS_LOADING } = AC;

    return (dispatch) => {
        const fetchUrl = url.format({
            protocol: 'https',
            hostname: EXCHANGE_API_URL,
            pathname: date,
            query: {
                base: currency,
            },
        });

        dispatch({
            type: IS_LOADING,
            payload: {
                isLoading: true,
            },
        });

        fetch(fetchUrl).then((response) => {
            return response.json();
        }).then((data) => {
            const { rates } = data;
            dispatch({
                type: FETCH_RATES + SUCCESS,
                payload: {
                    exchangeRates: rates,
                    isLoading: false,
                },
            });
        }).catch((err) => {
            dispatch({
                type: FETCH_RATES + FAILURE,
                payload: {
                    error: err,
                    isLoading: false,
                },
            });
        });
    };
};
