import React, { useEffect, useState } from 'react';
import { fetchTrendingMovie } from 'service/api';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    const fetchTrendingMovieData = async () => {
      try {
        const data = await fetchTrendingMovie();
        setTrendings(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovieData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={trendings} />
    </div>
  );
};

export default Home;
