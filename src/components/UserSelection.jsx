import React from 'react';
import PropTypes from 'prop-types';
// Constants
import { CURRECIES } from '../constants';

const UserSelection = (props) => {
    const {
        currency,
        date,
        defaultStateHandler,
        fetchUserInputRates,
    } = props;

    return (
        <div>
            <div className="input-wrapper">
                <span className="input-wrapper__label">BASE: </span>
                <select
                    className="input-wrapper__element"
                    value={currency}
                    onChange={e => defaultStateHandler('currency', e.target.value)}
                >
                    {CURRECIES.map((currencyItem) => {
                        return (
                            <option
                                key={currencyItem}
                            >
                                {currencyItem}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="input-wrapper">
                <span className="input-wrapper__label">DATE: </span>
                <input
                    className="input-wrapper__element"
                    type="date"
                    onChange={e => defaultStateHandler('date', e.target.value)}
                    value={date}
                />
            </div>
            <div className="input-wrapper">
                <button
                    type="button"
                    onClick={fetchUserInputRates}
                >
                    Display
                </button>
            </div>
        </div>
    );
};

UserSelection.propTypes = {
    currency: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    defaultStateHandler: PropTypes.func.isRequired,
    fetchUserInputRates: PropTypes.func.isRequired,
};

export default UserSelection;
