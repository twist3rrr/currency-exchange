import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, subtractCounter } from './ac/counter';

class App extends Component {
    render() {
        const {
            counter,
            addCounter,
            subtractCounter
        } = this.props;

        return (
            <div>
                <h1>{counter}</h1>
                <button type="button" onClick={addCounter}>+</button>
                <button type="button" onClick={subtractCounter}>-</button>
            </div>
        );
    }
}

export default connect((state) => {
    const { counter } = state;

    return { counter };
}, {
    addCounter,
    subtractCounter,
})(App);
