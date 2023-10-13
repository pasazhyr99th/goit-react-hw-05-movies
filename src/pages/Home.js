import React, { useEffect, useState } from 'react';
import { fetchTrendingMovie } from 'service/api';
import MoviesList from 'components/MovieList';
import Loader from 'components/Loader';

const Home = () => {
  const [trendings, setTrendings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovieData = async () => {
      setIsLoading(true);

      try {
        const movies = await fetchTrendingMovie();
        setTrendings(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovieData();
  }, []);

  return (
    <div>
      <h1 style={{ paddingLeft: '5px' }}>Trending today</h1>
      {isLoading && <Loader />}

      <MoviesList movies={trendings} />
    </div>
  );
};

export default Home;
