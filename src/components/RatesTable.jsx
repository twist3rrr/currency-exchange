import React from 'react';
import PropTypes from 'prop-types';
// Constants
import { BUY_SELL_RATE, CURRECIES } from '../constants';

const RatesTable = (props) => {
    const { ascendingSort, changeSortType, exchangeRates } = props;

    const sortedList = Object.keys(exchangeRates).sort((a, b) => {
        return ascendingSort
            ? a.localeCompare(b)
            : b.localeCompare(a);
    });

    const renderRoutes = () => {
        return sortedList.map(key => (
            <tr {...{ key }} className={CURRECIES.includes(key) ? 'highlight' : null}>
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
                        className="cursor-pointer noselect"
                        onClick={changeSortType}
                    >
                        Currency ⇅
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
