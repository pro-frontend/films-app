import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ImovieItem, movies, Tmovies } from "../../utils/mockData";
import { getMoviesList } from "../../utils/requests";
import { WrapperLarge } from "../_StyledComponents";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState<Tmovies>([]);
  useEffect(() => {
    setMoviesData(movies);
    getMoviesList.then((res) => console.log(res));
  }, []);

  return (
    <Container maxWidth="lg">
      <WrapperLarge container spacing={6}>
        {moviesData ? (
          moviesData.map(
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
