import React from 'react';
import Counter from '../index';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe("Counter component test cases", () => {
    test("should increment while click increment text", () => {
        render(<Counter count={10} />);
        fireEvent.click(screen.getByText("Increment"));
        expect(screen.getByTestId("counter")).toHaveTextContent("11");
    })
    test("should decrement while click increment text", () => {
        render(<Counter count={10} />);
        fireEvent.click(screen.getByText("Decrement"));
        expect(screen.getByTestId("counter")).toHaveTextContent("9");
    })
})