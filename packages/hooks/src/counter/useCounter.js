import { useReducer, useCallback } from 'react';
import counterReducer from './reducer';
import { increment, decrement } from './actions';
export default function useCounter(props) {
    let [state, dispatch] = useReducer(counterReducer, props.count);
    let handleIncrement = useCallback(() => dispatch(increment()));
    let handleDecrement = useCallback(() => dispatch(decrement()));
    return { count: state, handleIncrement, handleDecrement };
}