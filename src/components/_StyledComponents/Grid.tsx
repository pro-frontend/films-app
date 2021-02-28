import { Grid } from "@material-ui/core";
import styled from "styled-components";

const StyledWrapperSmall = styled(Grid)`
  padding: var(--margins-small);
`;

const StyledWrapperLarge = styled(Grid)`
  padding: var(--margins-large);
`;

const StyledWrapperGiant = styled(Grid)`
  padding: var(--margins-large) var(--margins-giant);
`;

const StyledGridFooter = styled(Grid)`
  padding: var(--margins-large);
  background-color: var(--color-black-lighter);
`;

export {
  StyledWrapperLarge,
  StyledWrapperGiant,
  StyledGridFooter,
  StyledWrapperSmall,
};
