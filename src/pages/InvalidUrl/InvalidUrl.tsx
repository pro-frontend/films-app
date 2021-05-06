import React from "react";
import styled from "styled-components";

const InvalidUrl = () => (
  <StyledPage>Sorry, this address doesn't exist.</StyledPage>
);

const StyledPage = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 450%;
`;

export { InvalidUrl };
