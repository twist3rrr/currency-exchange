import React from 'react';
import PropTypes from 'prop-types';

import { BUY_SELL_RATE, CURRECIES } from '../constants';

const RatesTable = (props) => {
    const { ascendingSort, changeSortType, exchangeRates } = props;
    const listOfCurrecies = Object.values(CURRECIES);

    const cortedList = Object.keys(exchangeRates).sort((a, b) => {
        return ascendingSort
            ? a.localeCompare(b)
            : b.localeCompare(a);
    });

    const renderRoutes = () => {
        return cortedList.map(key => (
            <tr {...{ key }} className={listOfCurrecies.includes(key) && 'highlight'}>
                <td>{key}</td>
                <td>{(exchangeRates[key] * (1 - BUY_SELL_RATE)).toFixed(4)}</td>
                <td>{(exchangeRates[key] * (1 + BUY_SELL_RATE)).toFixed(4)}</td>
            </tr>
        ));
    };

    return (
        <table>
            <thead>
                <tr>
                    <td
                        className="cursor-pointer"
                        onClick={changeSortType}
                    >
                        Currency
                    </td>
                    <td>Buy</td>
                    <td>Sell</td>
                </tr>
            </thead>
            <tbody>
                { renderRoutes() }
            </tbody>
        </table>
    );
};

RatesTable.propTypes = {
    ascendingSort: PropTypes.bool.isRequired,
    changeSortType: PropTypes.func.isRequired,
    exchangeRates: PropTypes.object.isRequired,
};

export default RatesTable;
