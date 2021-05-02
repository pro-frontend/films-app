import { atom } from "recoil";
import { Tmovies } from "../../utils/mockData";

export const moviesListAtom = atom<Tmovies>({
  key: "moviesList",
  default: [],
});

export const selectedMovieIdAtom = atom({
  key: "selectedMovieId",
  default: 999_999_999,
});

export const selectedFilterAtom = atom<number>({
  key: "selectedFilter",
  default: 0,
});

export const selectedSortAtom = atom({
  key: "selectedSort",
  default: "RELEASE DATE Up",
});

export const moviesAtoms = {
  moviesListAtom,
  selectedFilterAtom,
  selectedMovieIdAtom,
  selectedSortAtom,
};
