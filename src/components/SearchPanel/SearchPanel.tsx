import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { SearchMovieButton } from "../Button";
import { Input, WrapperGiant } from "../_StyledComponents";

const SearchPanel = () => {
  /*
    TODO: Create a button with clear of input and request to a list of all movies.
    TODO: Connect input field onInput with searchMoviesInputAtom and query after click "search" button or enter.
  */

  return (
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
};

export default SearchPanel;
