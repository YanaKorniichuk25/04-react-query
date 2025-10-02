export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  backdrop_path?: string;
  vote_average?: number;
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}
