export const ASYNK_GET_MOVIES_LIST = "ASYNK_GET_MOVIES_LIST";
export const ASYNK_GET_MOVIE_CARD = "ASYNK_GET_MOVIE_CARD";
export const ASYNK_ADD_NEW_MOVIE = "ASYNK_ADD_NEW_MOVIE";
export const ASYNK_UPDATE_CURRENT_MOVIE = "ASYNK_UPDATE_CURRENT_MOVIE";
export const ASYNK_DELETE_CURRENT_MOVIE = "ASYNK_DELETE_CURRENT_MOVIE";

export const getMoviesList = (store) => store.shared.moviesList;
export const getSelectedMovieId = (store) => store.shared.selectedMovieId;
export const getServerResponseStatus = (store) =>
  store.shared.serverResponseStatus;

export const selectedMovieCard = (store) => {
  const id = store.shared.selectedMovieId;
  const list = store.shared.moviesList;

  return list.filter((item) => id === item.id);
};

export const asyncGetMoviesList = () => {};
export const asyncGetMovieCard = () => {};
export const asyncAddNewMovie = () => {};
export const asyncUpdateCurrentMovie = () => {};
export const asyncDeleteCurrentMovie = () => {};
