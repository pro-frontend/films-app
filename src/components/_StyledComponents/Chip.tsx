import { Chip } from "@material-ui/core";
import styled from "styled-components";

const StyledChip = styled(Chip)<{
  margins?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}>`
  ${({ margins }) => margins && `margin: ${margins};`};

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};

  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};

  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`};
`;

export { StyledChip };
