import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Main } from "./src/Main";
import { Timer } from "./src/Timer/Timer";
import { Action } from "./src/Timer/Action";
import RNRestart from "react-native-restart";

export const restart = RNRestart?.restart ? RNRestart?.restart : () => {};
export default function App() {
  return (
    <View style={styles.container}>
      <Main>
        <SafeAreaView>
          <Text style={styles.text}>(C) by bjatta</Text>
          <Timer initialValue={10000} period={1} />
          <Timer initialValue={1000} period={10} />
          <Timer initialValue={100} period={100} />
          <Timer />
        </SafeAreaView>
        <Action
          name="reset app"
          handler={restart}
          disabled={!Boolean(RNRestart?.restart)}
        />
      </Main>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "lightgray",
    fontSize: 9,
  },
});
