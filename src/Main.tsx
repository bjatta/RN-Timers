import { View } from "react-native";
import { ReactElement } from "react";

export const Main = ({ children }: { children?: ReactElement }) => (
  <View>{children}</View>
);
