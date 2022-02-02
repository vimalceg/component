import { useReducer, useCallback, useEffect } from 'react';
import counterReducer from './reducer';
import { increment, decrement, reset } from './actions';
export default function useCounter(props) {
    let [count, dispatch] = useReducer(counterReducer, props.count);
    useEffect(() => {
        dispatch(reset(props.count));
    }, [props.count]);
    let handleIncrement = useCallback(() => dispatch(increment()));
    let handleDecrement = useCallback(() => dispatch(decrement()));
    return { count, handleIncrement, handleDecrement };
}