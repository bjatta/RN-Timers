import { useRef, useState } from "react";

export const useTimer = ({ initialValue = 0, period = 1000 }) => {
  const [value, setValue] = useState(initialValue);
  const [isRunning, setIsRunning] = useState(false);
  const timer = useRef(null);
  const handleReset = () => setValue(0);

  const resetTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  const handleStop = () => {
    resetTimer();
    setIsRunning(false);
  };
  const handleStart = () => {
    timer.current = setInterval(() => setValue((v) => v + 1), period);
    setIsRunning(true);
  };

  return {
    value,
    isRunning,
    handleReset,
    handleStop,
    handleStart,
  };
};
