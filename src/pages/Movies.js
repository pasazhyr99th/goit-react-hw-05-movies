import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const navigate = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get('query') ?? '';

  // useEffect(() => {
  const handleSearch = async movieName => {
    try {
      const movie = await handleSearchMovie(movieName);
      setSearchMovies(movie);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  }

  // searchMovieData();
  // }, []);

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

  // const updQueryString = query => {
  //   const nextParams = query !== '' && { query };
  //   setSearchParams(nextParams);
  // };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={searchMovies} onMovieClick={handleMovieClick} />
    </div>
  );
};

export default Movies;
