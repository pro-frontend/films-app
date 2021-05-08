import { mount, ReactWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { Logo, StyledSpan } from "../";

let componentLogo: ReactWrapper, componentStyledSpan: ReactWrapper;

describe("<AppRoot />", () => {
  beforeEach(() => {
    componentLogo = mount(<Logo />);
    componentStyledSpan = mount(<StyledSpan />);
  });

  it("should mount AppRoot", () => {
    expect(toJson(componentLogo)).toMatchSnapshot();
    expect(toJson(componentStyledSpan)).toMatchSnapshot();
  });
});
