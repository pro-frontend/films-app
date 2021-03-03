import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { SearchMovieButton } from "../Button";
import { Input, WrapperGiant } from "../_StyledComponents";

const SearchPanel = () => (
  <WrapperGiant container justify="space-between" alignItems="center">
    <Typography variant="h2" gutterBottom>
      FIND YOUR MOVIE
    </Typography>
    <SearchMovieButton />
    <Grid container justify="space-between" alignItems="center">
      <Input
        fullWidth
        color="secondary"
        placeholder="What do you want to watch?"
      />
    </Grid>
  </WrapperGiant>
);

export default SearchPanel;
