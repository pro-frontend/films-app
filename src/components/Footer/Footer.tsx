import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { GridFooter } from "../_StyledComponents";

const Footer = () => (
  <GridFooter container alignItems="center" justify="center">
    <Logo />
  </GridFooter>
);

const StyledFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  height: 77px;
`;

export { StyledFooter as Footer };
