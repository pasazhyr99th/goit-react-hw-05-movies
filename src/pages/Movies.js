import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { handleSearchMovie } from 'service/api';
import MovieList from 'components/MovieList';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const movieName = searchParams.get('query') ?? '';

  // useEffect(() => {
    const searchMovieData = async movieName => {
      try {
        const data = await handleSearchMovie(movieName);
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

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
      <SearchForm value={searchMovieData} />
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default Movies;
