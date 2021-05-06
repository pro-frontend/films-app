import { Grid, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { color, margins } from "../../common";
import {
  moviesListAtom,
  searchMoviesInputAtom,
} from "../../store/movies/atoms";
import { getMoviesList } from "../../utils/requests";
import { SearchMovieButton } from "../Button";
import { Input, WrapperGiant } from "../_StyledComponents";

const SearchPanel = () => {
  const [searchMoviesInput, setSearchMoviesInput] = useRecoilState<string>(
    searchMoviesInputAtom
  );
  const [, setMoviesList] = useRecoilState(moviesListAtom);

  const onSearchInput = useCallback(
    (e) => {
      setSearchMoviesInput(e.target.value);
      if (e.target.value === "") {
        getMoviesList.then((res) => {
          setMoviesList(res);
        });
      }
    },
    [setMoviesList, setSearchMoviesInput]
  );

  const clearSearchInput = useCallback(() => {
    setSearchMoviesInput("");
    getMoviesList.then((res) => {
      setMoviesList(res);
    });
  }, [setMoviesList, setSearchMoviesInput]);

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
    <WrapperGiant container justify="space-between" alignItems="center">
      <Typography variant="h2" gutterBottom>
        FIND YOUR MOVIE
      </Typography>
      <SearchMovieButton />
      <Grid container justify="space-between" alignItems="center">
        <Input
          onKeyPress={onPressWithInput}
          onChange={onSearchInput}
          value={searchMoviesInput}
          fullWidth
          color="secondary"
          placeholder="What do you want to watch?"
        />
        {searchMoviesInput ? (
          <ClearInput onClick={clearSearchInput} tabIndex={0}>
            X
          </ClearInput>
        ) : null}
      </Grid>
    </WrapperGiant>
  );
};

const ClearInput = styled.span`
  & {
    font-size: calc(${margins.normal} * 0.75);
    position: absolute;
    right: 8px;
    width: ${margins.normal};
    height: ${margins.normal};
    border: 1px solid ${color.accent};
    border-radius: 50%;
    background-color: ${color.white};
    color: ${color.blackDarker};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    right: 70px;
  }
`;

export default SearchPanel;
