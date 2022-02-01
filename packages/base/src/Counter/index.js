import React from 'react';
import { useCounter } from '@desk/hooks';
export default function Counter() {
    let { count, handleIncrement, handleDecrement } = useCounter({ count: 0 });
    return <div>
        <span onClick={handleDecrement}>Decrement</span>
        <br />
        <span>{count}</span>
        <br />
        <span onClick={handleIncrement}>Increment</span>
    </div>
} 