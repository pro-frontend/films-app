import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { color } from "../../common";
import { modalActiveAtom, modalModeAtom } from "../../store/modal/atoms";
import {
  moviesListAtom,
  searchMoviesInputAtom,
} from "../../store/movies/atoms";
import { getMoviesList } from "../../utils/requests";
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
  const [searchMoviesInput] = useRecoilState<string>(searchMoviesInputAtom);
  const [, setMoviesList] = useRecoilState(moviesListAtom);

  const searchQuery = useCallback(() => {
    getMoviesList.then((res) => {
      const filteredResult = res.filter(({ title }) =>
        title.includes(searchMoviesInput)
      );
      setMoviesList(filteredResult);
    });
  }, [searchMoviesInput, setMoviesList]);

  const onPressWithInput = useCallback(
    (e) => {
      console.log(e.key === "Enter");
      if (e.key === "Enter") searchQuery();
    },
    [searchQuery]
  );

  return (
    <StyledButton
      onClick={searchQuery}
      onKeyPress={onPressWithInput}
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
