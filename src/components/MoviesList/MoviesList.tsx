import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { recoilFilmsSelector } from "../../store";
import {
  moviesListAtom,
  selectedFilterAtom,
  selectedSortAtom,
} from "../../store/movies/atoms";
import { ImovieItem, Tmovies } from "../../utils/mockData";
import { getMoviesList } from "../../utils/requests";
import { WrapperLarge } from "../_StyledComponents";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const selectedFilter = useRecoilValue(selectedFilterAtom);
  const selectedSort = useRecoilValue(selectedSortAtom);
  const [, setMoviesData] = useRecoilState<Tmovies>(moviesListAtom);
  const currentMoviesData = useRecoilValue<Tmovies>(recoilFilmsSelector);

  useEffect(() => {
    getMoviesList.then((res) => setMoviesData(res));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, selectedSort]);

  return (
    <Container maxWidth="lg">
      <WrapperLarge container spacing={6}>
        {Boolean(currentMoviesData) ? (
          currentMoviesData.map(
            ({ id, title, tagline, poster_path, release_date }: ImovieItem) => (
              <MovieCard
                key={id}
                id={id}
                title={title}
                tagline={tagline}
                poster_path={poster_path}
                release_date={release_date}
              />
            )
          )
        ) : (
          <h2>No films have found here.</h2>
        )}
      </WrapperLarge>
    </Container>
  );
};

export { MoviesList };
