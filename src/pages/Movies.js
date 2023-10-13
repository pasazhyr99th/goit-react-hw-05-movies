import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import Loader from 'components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    const handleSearch = async () => {
      setIsLoading(true);

      try {
        const movie = await handleSearchMovie(query);

        if (movie.length === 0) {
          setIsLoading(false);
          toast.info('Sorry, no movies found. Try something else! 🤔', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }

        setSearchMovies(movie);
      } catch (error) {
        toast.error(`Error fetching movies: ${error} ⛔️`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      } finally {
        setIsLoading(false);
      }
    };

    handleSearch();
  }, [query]);

  const handleSubmit = newQuery => {
    if (newQuery.trim() === '') {
      toast.info('Empty request!  👀', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    if (newQuery === query) {
      toast.info('Please enter a new request', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    setSearchMovies([]);
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {searchMovies.length !== 0 && query !== '' && (
        <MovieList movies={searchMovies} />
      )}
      <ToastContainer />
    </div>
  );
};

export default Movies;
