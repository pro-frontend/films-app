// import
import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { StyledGridFooter } from "../_StyledComponents";

const Footer = () => (
  <StyledGridFooter container alignItems="center" justify="center">
    <Logo />
  </StyledGridFooter>
);

const StyledFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
  height: 77px;
`;

export { StyledFooter as Footer };
