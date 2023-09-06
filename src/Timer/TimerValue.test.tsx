import React from "react";
import { formatter, TimerValue } from "./TimerValue";
import renderer from "react-test-renderer";

describe("TimerValue component", () => {
  it('should render the raw value when format is "raw"', () => {
    const tree = renderer
      .create(<TimerValue value={10} format="raw" />)
      .toJSON();
    expect(tree.children[0]).toBe("10");
  });

  it('should render the formatted value when format is not "raw"', () => {
    const tree = renderer
      .create(<TimerValue value={10} format="formatted" />)
      .toJSON();
    expect(tree.children[0]).toBe("10");
  });
});

describe("formatter function", () => {
  it("should format the value as a string", () => {
    expect(formatter(10)).toBe("10");
  });
});
