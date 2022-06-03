type Movie = {
  id: string;
  title: string;
  year: string;
  poster: string;
  isFavorite?: boolean;
};

type OMDBMovie = {
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
  imdbID: string;
};

type OMDBSearchResponse = {
  Response: 'True' | 'False';
  Search?: OMDBMovie[];
  totalResults?: string;
  Error?: string;
};
