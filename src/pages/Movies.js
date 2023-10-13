import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
// import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // const navigate = useNavigate();

  useEffect(() => {
    if (query === '') return;

    const handleSearch = async () => {
      try {
        const movie = await handleSearchMovie(query);
        setSearchMovies(movie);
      } catch (error) {
        console.error(error);
      }
    };

    handleSearch();
    // setSearchMovies('');
  }, [query]);

  // const updQueryString = query => {
  //   const nextParams = query !== '' && { query };
  //   setSearchParams(nextParams);
  // };

  // const handleMovieClick = movieId => {
  //   navigate(`/movies/${movieId}`);
  // };

  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      alert('Порожній запит');
      return;
    }
    if (newQuery === query) {
      alert('Введіть новий запит');
      return;
    }

    setSearchMovies([]);
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {searchMovies.length !== 0 && query !== '' && (
        <MovieList movies={searchMovies} />
      )}
    </div>
  );
};

export default Movies;
