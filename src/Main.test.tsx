import { Text, View } from "react-native";
import { render } from "@testing-library/react-native";
import { Main } from "./Main";

describe("Main component", () => {
  test("renders children correctly", () => {
    const { getByText } = render(
      <Main>
        <View>
          <Text>Child component</Text>
        </View>
      </Main>,
    );

    expect(getByText("Child component")).toBeTruthy();
  });

  test("renders no children", () => {
    const { queryByTestId } = render(<Main />);

    expect(queryByTestId("child-component")).toBeNull();
  });
});
