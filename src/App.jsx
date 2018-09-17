import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, subtractCounter } from './ac/counter';
import fetchRates from './ac/rates';

import { CURRECIES } from './constants';

import { getToday } from './utilities';

import UserSelection from './components/UserSelection';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currency: CURRECIES.EUR,
            date: getToday(),
        };

        this.defaultStateHandler = this.defaultStateHandler.bind(this);
    }

    componentDidMount() {
        const { currency, date } = this.state;
        const { fetchRates } = this.props;
        fetchRates({ currency, date });
    }

    defaultStateHandler(propName, value, next) {
        this.setState({
            [propName]: value,
        }, next);
    }

    render() {
        const {
            addCounter,
            counter,
            exchangeRates,
            error,
            isLoading,
            subtractCounter,
        } = this.props;

        const { currency, date } = this.state;

        return (
            <React.Fragment>
                <h2>Exchange rates</h2>
                <div>
                    <div>
                        <div>
                            <h1>{counter}</h1>
                            <button type="button" onClick={addCounter}>+</button>
                            <button type="button" onClick={subtractCounter}>-</button>
                        </div>
                        <UserSelection
                            {...{
                                currency,
                                date,
                                defaultStateHandler: this.defaultStateHandler,
                            }}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect((state) => {
    const { counter, rates } = state;
    const { isLoading, error, exchangeRates } = rates;

    return {
        counter,
        exchangeRates,
        error,
        isLoading,
    };
}, {
    addCounter,
    fetchRates,
    subtractCounter,
})(App);
