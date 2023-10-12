import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
