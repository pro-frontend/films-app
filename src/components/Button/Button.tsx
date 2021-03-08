import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styled from "styled-components";
import { color } from "../../common";

const AddMovieButton = () => {
  function handleClick() {}
  return (
    <StyledButton
      onClick={handleClick}
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
    >
      ADD MOVIE
    </StyledButton>
  );
};

const SearchMovieButton = () => {
  function handleClick() {}
  return (
    <StyledButton
      onClick={handleClick}
      variant="contained"
      color="primary"
      startIcon={<SearchIcon />}
    >
      SEARCH
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  position: relative;
  button {
    background-color: ${color.accent} !important;
  }
  span.MuiButton-label {
    color: ${color.white} !important;
  }
`;

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${color.accent};
  font-weight: bold;
  cursor: pointer;
`;

export { AddMovieButton, SearchMovieButton, StyledButton, StyledLink };
