import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
  }, [query]);

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
