import styled from "styled-components";

const StyledSpan = styled.span`
  color: var(--color-accent);
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  color: var(--color-accent);
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};
`;

export { StyledSpan, StyledParagraph };
