import { mount, ReactWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { Paper } from "../";

let component: ReactWrapper;

describe("<AppRoot />", () => {
  beforeEach(() => {
    component = mount(<Paper />);
  });

  it("should mount AppRoot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
