import { Tmovies } from "../mockData";
import { Request } from "./Requests";

const getMoviesList: Promise<Tmovies> = Request.getRequest("/movies").then(
  (res) => res.data
);

const addMovie = (body: object) => Request.postRequest("/movies", body);

const updateMovie = (id: number, body: object) =>
  Request.putRequest(`/movies/${id}`, body);

const getMovieById = (id: number) => Request.getRequest(`/movies/${id}`);

const deleteMovie = (id: number) => Request.deleteRequest(`/movies/${id}`);

export { getMoviesList, addMovie, updateMovie, getMovieById, deleteMovie };
