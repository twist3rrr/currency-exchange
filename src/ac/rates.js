import url from 'url';

import { AC, AC_STATE, EXCHANGE_API_URL } from '../constants';

export default ({ currency, date }) => {
    const { FAILURE, SUCCESS } = AC_STATE;
    const { FETCH_RATES } = AC;

    return (dispatch) => {
        const fetchUrl = url.format({
            protocol: 'https',
            hostname: EXCHANGE_API_URL,
            pathname: date,
            query: {
                base: currency,
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
            const { status, statusText } = err.response;
            dispatch({
                type: FETCH_RATES + FAILURE,
                payload: {
                    error: `Status: ${status}, Message: ${statusText}`,
                    isLoading: false,
                },
            });
        });
    };
};
