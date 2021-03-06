import React, { useEffect, useState } from "react";
import { ImovieItem, movies, Tmovies } from "../../utils/mockData";
import { WrapperLarge } from "../_StyledComponents";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const [moviesData, setMoviesData] = useState<Tmovies>([]);
  useEffect(() => setMoviesData(movies), []);
  return (
    <WrapperLarge container spacing={6}>
      {moviesData ? (
        moviesData.map(
          ({ id, name, description, urlImage, date }: ImovieItem) => (
            <MovieCard
              key={id}
              id={id}
              name={name}
              description={description}
              urlImage={urlImage}
              date={date}
            />
          )
        )
      ) : (
        <h2>No films have found here.</h2>
      )}
    </WrapperLarge>
  );
};

export { MoviesList };
