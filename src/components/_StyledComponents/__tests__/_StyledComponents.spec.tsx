import { mount, ReactWrapper } from "enzyme";
import toJson from "enzyme-to-json";
import React, { ReactElement } from "react";
import {
  Card,
  Chip,
  GridFooter,
  GridRelative,
  Image,
  Input,
  ModalPaper,
  Paper,
  Paragraph,
  Span,
  WrapperGiant,
  WrapperLarge,
  WrapperSmall,
} from "../";

let componentsArray: ReactElement[] = [
    <Card />,
    <Chip />,
    <Input />,
    <GridFooter />,
    <GridRelative />,
    <WrapperGiant />,
    <WrapperLarge />,
    <WrapperSmall />,
    <Image />,
    <ModalPaper />,
    <Paper />,
    <Paragraph />,
    <Span />,
  ],
  mounted: ReactWrapper[];

describe("<AppRoot />", () => {
  beforeEach(() => {
    mounted = componentsArray.map((element) => mount(element));
  });

  it("should mount AppRoot", () => {
    mounted.forEach((component) => expect(toJson(component)).toMatchSnapshot());
  });
});
