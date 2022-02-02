import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../useCounter';

describe("Counter hook testing", () => {
    test('should be initialize with zero', () => {
        let { result } = renderHook(() => useCounter({ count: 0 }));
        expect(result.current.count).toBe(0);
    })
    test('should increment counter', () => {
        let { result } = renderHook(() => useCounter({ count: 0 }));
        act(() => {
            result.current.handleIncrement();
        })
        expect(result.current.count).toBe(1);
    })
    test('should decrement counter', () => {
        let { result } = renderHook(() => useCounter({ count: 1 }));
        act(() => {
            result.current.handleDecrement();
        })
        expect(result.current.count).toBe(0);
    })
    test('should reset counter', () => {
        let initialValue = { count: 1 }
        let { result, rerender } = renderHook(() => useCounter(initialValue));
        expect(result.current.count).toBe(1);
        initialValue = { count: 2 };
        rerender();
        expect(result.current.count).toBe(2);
    })
})

