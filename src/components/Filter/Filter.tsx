import { Tab, Tabs } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { moviesListAtom, selectedFilterAtom } from "../../store/movies/atoms";
import { genres, Tmovies } from "../../utils/mockData";
import { getMoviesList } from "../../utils/requests";

const Filter = () => {
  const [genre, setGenre] = useRecoilState<number>(selectedFilterAtom);
  const setMoviesData = useSetRecoilState<Tmovies>(moviesListAtom);

  const changeGenre = useCallback(
    (currentGenre: number) => {
      setGenre(currentGenre);
    },
    [setGenre]
  );

  useEffect(() => {
    getMoviesList.then((res) => setMoviesData(res));
  }, [genre, setMoviesData]);

  return (
    <Tabs value={genre} aria-label="movies genres">
      {genres.map((genre, id) => (
        <Tab key={genre} label={genre} onClick={() => changeGenre(id)} />
      ))}
    </Tabs>
  );
};

export { Filter };
