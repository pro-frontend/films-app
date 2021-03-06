import { Button } from "@material-ui/core";
import styled from "styled-components";

const MenuMovieCardButton = styled(Button)`
  position: absolute !important;
  right: 30px;
  top: 30px;
  width: 40px;
  height: 40px;
  background-color: var(--color-white) !important;

  &:hover {
    border-radius: 70px;
    border: 1px solid var(--color-accent);
  }
`;

export { MenuMovieCardButton };
