import React, { useEffect, useRef, Suspense, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      try {
        const details = await fetchMovieDetails(movieId);
        setMovieData(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const {
    poster_path,
    vote_average,
    title,
    release_date,
    overview,
    genres,
    original_title,
  } = movieData || {};

  const defaultImgURL =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <button type="button">⬅️ Go back</button>
      </Link>
      <h1>
        {title} {release_date && `(${release_date.substring(0, 4)})`}
      </h1>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImgURL
        }
        alt={original_title}
        width={250}
      />
      <p>Rating: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres?.map(genre => genre.name).join(', ')}</p>
      {/* {movieData && (
        <div>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )} */}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
