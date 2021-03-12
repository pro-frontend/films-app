import styled from "styled-components";
import { color } from "../../common";

const StyledSpan = styled.span`
  color: ${color.accent};
  font-weight: bold;
`;

const StyledParagraph = styled.p<{
  color?: string;
  align?: "left" | "center" | "right";
}>`
  color: ${color.accent};
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `};

  ${({ align }) => align && `text-align: ${align}`};
`;

export { StyledSpan, StyledParagraph };
