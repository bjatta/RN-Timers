import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Action = ({
  name = "_",
  handler = () => {},
  disabled = false,
}) => (
  <TouchableOpacity
    onPress={handler}
    style={
      disabled
        ? { ...styles.actions, ...styles.buttonDisabledColor }
        : styles.actions
    }
    disabled={disabled}
  >
    <Text style={disabled ? styles.disabledText : styles.text}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#1877F2",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  disabledText: {
    fontWeight: "normal",
    color: "gray",
  },
  buttonDisabledColor: { backgroundColor: "lightgray" },
});
