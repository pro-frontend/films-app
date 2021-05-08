import { mount, ReactWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import { MockRecoilRoot } from "../";

let component: ReactWrapper;

describe("<MockRecoilRoot />", () => {
  beforeEach(() => {
    component = mount(<MockRecoilRoot />);
  });

  it("should mount MockRecoilRoot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
