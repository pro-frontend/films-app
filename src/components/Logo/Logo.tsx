import React from "react";
import styled from "styled-components";

const Logo = () => (
  <StyledSpan href="/">
    <b>netflix</b> roulette
  </StyledSpan>
);

const StyledSpan = styled.a`
  color: var(--color-accent);
  font-size: var(--margins-large);
  text-decoration: none;
`;

export { Logo };
