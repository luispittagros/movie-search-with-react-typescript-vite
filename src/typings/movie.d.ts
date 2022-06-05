interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
  runtime?: string;
  rated?: string;
  plot?: string;
  genres?: string[];
  directors?: string[];
  cast?: string[];
  rottenTomatoes?: string;
  imdbRating?: string;
}

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

type OMDBMovieResponse = {
  Title: string;
  Plot: string;
  Actors: string;
  Genre: string;
  Director: string;
  Rated: string;
  Poster: string;
  Runtime: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Year: string;
  imdbRating: string;
};
