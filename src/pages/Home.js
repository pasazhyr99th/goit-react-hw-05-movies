import React, { useEffect, useState } from 'react';
import { fetchTrendingMovie } from 'service/api';
// import MovieList from 'components/MovieList';
import MoviesList from 'components/MovieList';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchTrendingMovieData = async () => {
      try {
        const movies = await fetchTrendingMovie();
        setTrendings(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovieData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={trendings} />
    </div>
  );
};

export default Home;
