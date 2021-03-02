import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styled from "styled-components";

const AddMovieButton = () => {
  function handleClick() {}
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
    >
      ADD MOVIE
    </Button>
  );
};

const SearchMovieButton = () => {
  function handleClick() {}
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      startIcon={<SearchIcon />}
    >
      SEARCH
    </Button>
  );
};

const StyledButton = styled(Button)`
  * {
    color: var(--color-white);
    background-color: var(--color-accent);
  }
`;

export { AddMovieButton, SearchMovieButton, StyledButton };
