import { Request } from "./Requests";

export const { getMoviesList, getMovieById, addMovie } = {
  getMoviesList: Request.getRequest("/movies"),
  getMovieById: (id: number) => Request.getRequest(`/movies/${id}`),
  addMovie: (body: object) => Request.postRequest("/movies", body),
};
