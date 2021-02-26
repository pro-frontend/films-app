import React from "react";
import ErrorBoundary from "../";
let correctWrapper, wrongWrapper: ReactWrapper;

describe("<ErrorBoundary />", () => {
  beforeEach(() => {
    correctWrapper = mount(
      <ErrorBoundary>
        <h2>Correct component</h2>
      </ErrorBoundary>,
    );
    wrongWrapper = mount(
      <ErrorBoundary>
        <h2>{new Error("Component has a mistake")}</h2>
      </ErrorBoundary>,
    );
  });

  it("should mount", () => {
    expect(correctWrapper).toMatchSnapshot();
    expect(wrongWrapper).toMatchSnapshot();
  });
});
