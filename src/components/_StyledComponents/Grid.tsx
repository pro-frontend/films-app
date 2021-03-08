import { Grid } from "@material-ui/core";
import styled from "styled-components";
import { color, margins } from "../../common";

const StyledWrapperSmall = styled(Grid)`
  padding: ${margins.small};
`;

const StyledWrapperLarge = styled(Grid)`
  padding: ${margins.large};
`;

const StyledWrapperGiant = styled(Grid)`
  padding: ${margins.large} ${margins.giant};
`;

const StyledGridFooter = styled(Grid)`
  padding: ${margins.large};
  background-color: ${color.blackLighter};
`;

const StyledGridRelative = styled(Grid)`
  position: relative;
`;

export {
  StyledGridRelative,
  StyledWrapperLarge,
  StyledWrapperGiant,
  StyledGridFooter,
  StyledWrapperSmall,
};
