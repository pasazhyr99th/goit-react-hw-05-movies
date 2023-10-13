import React, { useEffect, useRef, Suspense, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import Loader from 'components/Loader';
import {
  Container,
  ContainerInfo,
  List,
  ListAdditionalInfo,
  LinkAdditionalInfo,
  Button,
  ContainerAdditionaInfo,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetailsData = async () => {
      setIsLoading(true);

      try {
        const details = await fetchMovieDetails(movieId);
        setMovieData(details);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  const {
    poster_path,
    popularity,
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
        <Button type="button">⬅️ Go back</Button>
      </Link>
      {isLoading && <Loader />}
      {movieData && (
        <Container>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImgURL
            }
            alt={original_title}
            width={250}
          />
          <ContainerInfo>
            <h1>
              {title} {release_date && `(${release_date.slice(0, 4)})`}
            </h1>
            <p>
              <b>User score:</b> {popularity}
            </p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres?.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </ContainerInfo>
        </Container>
      )}
      <ContainerAdditionaInfo>
        <h3>Additional information</h3>
        <ListAdditionalInfo>
          <li>
            <LinkAdditionalInfo to="cast">Cast</LinkAdditionalInfo>
          </li>
          <li>
            <LinkAdditionalInfo to="reviews">Reviews</LinkAdditionalInfo>
          </li>
        </ListAdditionalInfo>
      </ContainerAdditionaInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
