import { mount, ReactWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import ErrorBoundary from "../";
let correctWrapper: ReactWrapper, wrongWrapper: ReactWrapper;

describe("<ErrorBoundary />", () => {
  beforeEach(() => {
    correctWrapper = mount(
      <ErrorBoundary>
        <h2>Correct component</h2>
      </ErrorBoundary>
    );
    wrongWrapper = mount(
      <ErrorBoundary>
        <h2>Text. {new Error("Component has a mistake")}</h2>
      </ErrorBoundary>
    );
  });

  it("should mount", () => {
    expect(toJson(correctWrapper)).toMatchSnapshot();
    expect(toJson(wrongWrapper)).toMatchSnapshot();
  });
});
