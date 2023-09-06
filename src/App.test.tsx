import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import App, { restart } from "../App";
import RNRestart from "react-native-restart";
import { act } from "@testing-library/react-hooks/native";

const testedMethod = RNRestart
  ? RNRestart
  : {
      restart: () => {},
    };
jest.mock("react-native-restart", () => ({
  restart: jest.fn(),
}));

describe("restart", () => {
  test("should call RNRestart.restart if it is available", () => {
    restart();
    expect(RNRestart.restart).toHaveBeenCalled();
  });
});
describe("App", () => {
  test("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("(C) by bjatta")).toBeTruthy();
  });

  test("resets the app when action button is pressed", () => {
    const restartMock = jest.spyOn(testedMethod, "restart");
    const { getByText } = render(<App />);
    act(() => {
      fireEvent.press(getByText("reset app"));
    });
    expect(Boolean(restartMock)).toBe(true);
  });

  test("disables action button when restart is not available", () => {
    jest.spyOn(testedMethod, "restart").mockReturnValue(undefined);
    const { getByText } = render(<App />);
    const actionButton = getByText("reset app");
    expect(Boolean(actionButton.props.disabled)).toBe(false);
  });
});
