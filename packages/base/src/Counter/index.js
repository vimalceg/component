import React from 'react';
import { useCounter } from '@zdesk/hooks';
import propTypes from './propTypes';
export default function Counter(props) {

    let { count, handleIncrement, handleDecrement } = useCounter(props);
    return <div>
        <span onClick={handleDecrement}>Decrement</span>
        <br />
        <span data-testid="counter">{count}</span>
        <br />
        <span onClick={handleIncrement}>Increment</span>
    </div>
}
Counter.propTypes = propTypes;