import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { color } from "../../common";
import { modalActiveAtom, modalModeAtom } from "../../store/modal/atoms";
import { Tmode } from "../Modal/Modal.types";

const AddMovieButton = () => {
  const [, setModalActive] = useRecoilState(modalActiveAtom);
  const [, setModalMode] = useRecoilState(modalModeAtom);

  const handleClick = () => {
    setModalActive(true);
    setModalMode(Tmode.CREATE);
  };
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
  /*
    TODO: When click to search button -> get query and replace into `moviesListAtom`.
  */
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
