import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import RatesTable from './components/RatesTable';
import UserSelection from './components/UserSelection';
// Actions
import fetchRates from './ac/rates';
// Constants
import { CURRECIES } from './constants';
// Utilities
import getToday from './utilities';

class App extends Component {
    state = {
        ascendingSort: true,
        currency: CURRECIES[0],
        date: getToday(),
    };

    componentDidMount() {
        this.fetchUserInputRates();
    }

    fetchUserInputRates = () => {
        const { currency, date } = this.state;
        const { fetchRates } = this.props;
        fetchRates({ currency, date });
    }

    changeSortType = () => {
        this.setState(prevState => ({
            ascendingSort: !prevState.ascendingSort,
        }));
    }

    defaultStateHandler = (propName, value, next) => {
        this.setState({
            [propName]: value,
        }, next);
    }

    render() {
        const {
            exchangeRates,
            error,
            isLoading,
        } = this.props;

        const { ascendingSort, currency, date } = this.state;

        return (
            <React.Fragment>
                <h2 className="align-center">Exchange rates</h2>
                { error && <h2>{error}</h2> }
                <div className="container main-layout">
                    <div className="container main-layout__sidebar">
                        <UserSelection
                            {...{
                                currency,
                                date,
                                defaultStateHandler: this.defaultStateHandler,
                                fetchUserInputRates: this.fetchUserInputRates,
                            }}
                        />
                    </div>
                    <div className="container main-layout__rates">
                        {
                            isLoading
                                ? <h2> ...IsLoading </h2>
                                : (<RatesTable
                                    {...{
                                        ascendingSort,
                                        changeSortType: this.changeSortType,
                                        exchangeRates,
                                    }}
                                />)
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect((state) => {
    const { rates } = state;
    const { isLoading, error, exchangeRates } = rates;

    return {
        exchangeRates,
        error,
        isLoading,
    };
}, {
    fetchRates,
})(App);
