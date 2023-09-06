import { StyleSheet, Text } from "react-native";

export const TimerValue = ({
  value,
  format = "raw",
}: {
  value: number;
  format?: string;
}) => {
  return (
    <Text style={styles.counterValueText}>
      {format === "raw" ? value : formatter(value)}
    </Text>
  );
};
export const formatter = (value: number) => `${value}`;
const styles = StyleSheet.create({
  counterValueText: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
