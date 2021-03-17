import styled from "styled-components";

const StyledImage = styled.img<{ width?: string }>`
  display: inline;
  width: ${({ width }) => width ?? "100%"};
  height: auto;
`;

export { StyledImage };
