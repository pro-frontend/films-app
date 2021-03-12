import styled from "styled-components";
import { color } from "../../common";

const StyledSpan = styled.span`
  color: ${color.accent};
  font-weight: bold;
`;

const StyledParagraph = styled.p`
  color: ${color.accent};
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};
`;

export { StyledSpan, StyledParagraph };
