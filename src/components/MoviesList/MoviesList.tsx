import React from "react";
import { StyledWrapperLarge } from "../_StyledComponents";
import { Movie } from "./Movie";

const MoviesList = () => (
  <StyledWrapperLarge container spacing={6}>
    <Movie />
    <Movie />
    <Movie />
    <Movie />
    <Movie />
  </StyledWrapperLarge>
);

export { MoviesList };
