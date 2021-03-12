import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

export const ModalGrid = styled(Grid)`
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  backdrop-filter: brightness(40%) blur(20px);
`;

export const ModalPaper = styled(Paper)`
  margin: 40px;
  width: 100%;

  @media (min-width: 768px) {
    width: 600px;
  }
`;
