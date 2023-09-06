import { renderHook, act } from '@testing-library/react-hooks/native';
import { useTimer } from './useTimer';
test('initial value should be set correctly', () => {
    const { result } = renderHook(() => useTimer({ initialValue: 10 }));
    expect(result.current.value).toBe(10);
});

test('timer should start and increment value correctly', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer({ period: 1000 }));
    act(() => {
        result.current.handleStart();
        jest.advanceTimersByTime(3000);
    });
    expect(result.current.value).toBe(3);
});

test('timer should stop and reset correctly', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useTimer({ period: 1000 }));
    act(() => {
        result.current.handleStart();
        jest.advanceTimersByTime(2000);
        result.current.handleStop();
    });
    expect(result.current.isRunning).toBe(false);
});