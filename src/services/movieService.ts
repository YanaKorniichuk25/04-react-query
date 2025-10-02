import axios from "axios";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { MovieResponse } from "../types/movie";

const myKey = import.meta.env.VITE_API_KEY;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const options = {
    params: { page, include_adult: false, query: query || undefined },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${myKey}`,
    },
  };
  const url = query ? "search/movie" : "movie/popular";
  const response = await axios.get<MovieResponse>(url, options);
  return response.data;
};

export function useMovies(query: string, page: number) {
  const options: UseQueryOptions<MovieResponse, Error> = {
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    staleTime: 1000 * 60 * 5,
  };

  return useQuery(options);
}
