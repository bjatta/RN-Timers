import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Timer} from './Timer';
import {act} from "@testing-library/react-hooks/native";

describe('Timer component', () => {
    test('renders TimerValue component with initial value', () => {
        const {getByText} = render(<Timer initialValue={10}/>);
        expect(getByText('10')).toBeTruthy();
    });

    test('renders TimerValue component with default value', () => {
        const {getByText} = render(<Timer/>);
        expect(getByText('0')).toBeTruthy();
    });

    test('handleReset function resets the timer value', () => {
        const {getByText} = render(<Timer initialValue={10}/>);
        act(() => {
            fireEvent.press(getByText('Reset'))
        });
        expect(getByText('0')).toBeTruthy();
    });

    test('handleStart function starts the timer', () => {
        jest.useFakeTimers();
        const {getByText} = render(<Timer/>);
        act(() => {
            fireEvent.press(getByText('Start'))
        });
        act(() => {
            jest.advanceTimersByTime(1000)
        });
        expect(getByText('1')).toBeTruthy();
    });

    test('handleStop function stops the timer', () => {
        jest.useFakeTimers();
        const {getByText} = render(<Timer/>);
        act(() => {
            fireEvent.press(getByText('Start'))
        });
        act(() => {
            jest.advanceTimersByTime(1000)
        });
        act(() => {
            fireEvent.press(getByText('Stop'))
        });
        act(() => {
            jest.advanceTimersByTime(1000)
        });
        expect(getByText('1')).toBeTruthy();
    });
});