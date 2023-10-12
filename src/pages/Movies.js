import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovieData = async () => {
      try {
        const data = await handleSearchMovie(movieName);
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    searchMovieData();
  }, [movieName]);

  // state, isLoading, errors

  // const updQueryString = e => {
  //   const movieIdValue = e.target.value;
  //   if (movieIdValue === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ movieId: movieIdValue });
  // };
  // const handleSubmit = value => {
  //   setSearchParams({ query: value });
  // };
  
  const updQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchForm value={movieName} onChange={updQueryString} />
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default Movies;
