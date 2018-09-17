import React from 'react';
import PropTypes from 'prop-types';

import { CURRECIES } from '../constants';

const UserSelection = (props) => {
    const { currency, date, defaultStateHandler } = props;
    const listOfCurrecies = Object.values(CURRECIES);

    return (
        <div>
            <div className="input-wrapper">
                <span className="input-wrapper__label">BASE: </span>
                <select
                    className="input-wrapper__element"
                >
                    {listOfCurrecies.map((currencyItem) => {
                        return (
                            <option
                                checked={(currency === currencyItem)}
                                key={currencyItem}
                                onClick={() => defaultStateHandler('currency', currencyItem)}
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
        </div>
    );
};

UserSelection.propTypes = {
    currency: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    defaultStateHandler: PropTypes.func.isRequired,
};

export default UserSelection;
