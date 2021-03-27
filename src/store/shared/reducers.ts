import {
  ASYNK_ADD_NEW_MOVIE,
  ASYNK_DELETE_CURRENT_MOVIE,
  ASYNK_GET_MOVIES_LIST,
  ASYNK_GET_MOVIE_CARD,
  ASYNK_UPDATE_CURRENT_MOVIE,
} from "./actions";

const initialState = {
  moviesList: [],
  selectedMovieId: 999_999_999,
  serverResponseStatus: {
    isError: false,
    message: "",
  },
};

export const sharedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ASYNK_GET_MOVIES_LIST:
      return {
        ...state,
      };

    case ASYNK_GET_MOVIE_CARD:
      return {
        ...state,
      };

    case ASYNK_ADD_NEW_MOVIE:
      return {
        ...state,
      };

    case ASYNK_UPDATE_CURRENT_MOVIE:
      return {
        ...state,
      };

    case ASYNK_DELETE_CURRENT_MOVIE:
      return {
        ...state,
      };

    default:
      return state;
  }
};
