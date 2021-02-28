import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { SearchMovieButton } from "../Button";
import { StyledInput, StyledWrapperGiant } from "../_StyledComponents";

const SearchPanel = () => (
  <StyledWrapperGiant container justify="space-between" alignItems="center">
    <Typography variant="h2" gutterBottom>
      FIND YOUR MOVIE
    </Typography>
    <SearchMovieButton />
    <Grid container justify="space-between" alignItems="center">
      <StyledInput
        fullWidth
        color="secondary"
        placeholder="What do you want to watch?"
      />
    </Grid>
  </StyledWrapperGiant>
);

export default SearchPanel;
