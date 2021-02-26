// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import Enzyme, { mount, ReactWrapper, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.ReactWrapper = ReactWrapper;

// Fail tests on any warning
console.error = (message: string) => {
  throw new Error(message);
};
