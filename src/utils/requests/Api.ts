import { Request } from "./Requests";

export const {
  getMoviesList,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
} = {
  getMoviesList: Request.getRequest("/movies").then((res) => console.log(res)),
  addMovie: (body: object) => Request.postRequest("/movies", body),
  updateMovie: (id: number, body: object) =>
    Request.putRequest(`/movies/${id}`, body),
  getMovieById: (id: number) => Request.getRequest(`/movies/${id}`),
  deleteMovie: (id: number) => Request.deleteRequest(`/movies/${id}`),
};
