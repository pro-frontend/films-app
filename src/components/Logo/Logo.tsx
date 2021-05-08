import React from "react";
import styled from "styled-components";
import { color, margins } from "../../common";

const Logo = () => (
  <StyledSpan href="/">
    <b>netflix</b> roulette
  </StyledSpan>
);

const StyledSpan = styled.a`
  color: ${color.accent};
  font-size: ${margins.large};
  text-decoration: none;
`;

export { Logo, StyledSpan };
