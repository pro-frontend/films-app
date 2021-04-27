import { selector } from "recoil";
import { genres as mockGenres, Tmovies } from "../../utils/mockData";
import { moviesListAtom, selectedFilterAtom, selectedSortAtom } from "./atoms";

export const recoilFilmsSelector = selector<Tmovies>({
  key: "recoilFilmsSelector",
  get: ({ get }) => {
    const selectedSort = get<string>(selectedSortAtom);
    const list = [...get<Tmovies>(moviesListAtom)];
    let selectedFilter = mockGenres[get(selectedFilterAtom)];

    switch (selectedSort) {
      case "RELEASE DATE Up":
        list.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
        break;
      case "RELEASE DATE Down":
        list.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
        break;
      case "POPULARITY Up":
        list.sort((a, b) => (a.vote_count < b.vote_count ? 1 : -1));
        break;
      case "POPULARITY Down":
        list.sort((a, b) => (a.vote_count > b.vote_count ? 1 : -1));
        break;
      case "RATING Up":
        list.sort((a, b) => (a.vote_average < b.vote_average ? 1 : -1));
        break;
      case "RATING Down":
        list.sort((a, b) => (a.vote_average > b.vote_average ? 1 : -1));
        break;
      default:
        break;
    }

    return list.filter(({ genres }) =>
      selectedFilter === "All" ? list : genres.includes(selectedFilter)
    );
  },
});
