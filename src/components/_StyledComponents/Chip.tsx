import { Chip, ChipProps } from "@material-ui/core";
import styled from "styled-components";

interface IStyledChip extends ChipProps {
  margins?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

const StyledChip = styled(Chip)<IStyledChip>`
  ${({ margins }) => margins && `margin: ${margins};`};

  ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`};

  ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`};

  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`};

  ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`};
`;

export { StyledChip };
