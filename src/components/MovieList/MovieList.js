import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
