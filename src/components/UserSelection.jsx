import React from 'react';
import PropTypes from 'prop-types';

import { CURRECIES } from '../constants';

const UserSelection = (props) => {
    const { defaultStateHandler } = props;
    const listOfCurrecies = Object.values(CURRECIES);

    return (
        <div>
            <div className="input-wrapper">
                <span className="input-wrapper__label">BASE: </span>
                <select
                    className="input-wrapper__element"
                >
                    {listOfCurrecies.map((currency) => {
                        return (
                            <option
                                key={currency}
                                onClick={() => defaultStateHandler('currency', currency)}
                            >
                                {currency}
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
                />
            </div>
        </div>
    );
};

UserSelection.propTypes = {
    defaultStateHandler: PropTypes.func.isRequired,
};

export default UserSelection;
