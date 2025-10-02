export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  // + інші поля, які тобі потрібні
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}
