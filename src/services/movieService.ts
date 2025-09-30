import axios from "axios";
import type { Movie } from "../types/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
interface MoviesResponse {
  results: Movie[];
}
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const myKey = import.meta.env.VITE_TMDB_TOKEN;

  const options = {
    params: { query: `${query}`, include_adult: false },
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myKey}`,
    },
  };
  try {
    const response = await axios.get<MoviesResponse>("search/movie", options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies");
    throw error;
  }
};
