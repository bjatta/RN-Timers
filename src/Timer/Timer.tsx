import { StyleSheet, View } from "react-native";
import { Action } from "./Action";
import { TimerValue } from "./TimerValue";
import { useTimer } from "./useTimer";

export const Timer = ({ initialValue = 0, period = 1000 }) => {
  const { value, isRunning, handleReset, handleStop, handleStart } = useTimer({
    initialValue,
    period,
  });
  return (
    <View style={styles.counterRow}>
      <TimerValue value={value} />
      <View style={styles.actionsRow}>
        <Action handler={handleReset} name="Reset" disabled={!value} />
        <Action handler={handleStart} name="Start" disabled={isRunning} />
        <Action handler={handleStop} name="Stop" disabled={!isRunning} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterRow: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    marginTop: 10,
  },
  actionsRow: { flexDirection: "row", gap: 20 },
});
