import React from 'react';
import PropTypes from 'prop-types';

const RatesTable = (props) => {
    const { exchangeRates } = props;

    const renderRoutes = () => {
        return Object.keys(exchangeRates).map(key => (
            <tr {...{ key }}>
                <td>{key}</td>
                <td>{(exchangeRates[key] * 0.95).toFixed(4)}</td>
                <td>{(exchangeRates[key] * 1.05).toFixed(4)}</td>
            </tr>
        ));
    };

    return (
        <table>
            <thead>
                <tr>
                    <td>Currency</td>
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
    exchangeRates: PropTypes.object.isRequired,
};

export default RatesTable;
