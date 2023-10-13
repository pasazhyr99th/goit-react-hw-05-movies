import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'service/api';
import { CastList, CastItem, ContainerCast } from './Cast.styled';
import Loader from 'components/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieCredits = async () => {
      setIsLoading(true);

      try {
        const credits = await fetchMovieCast(movieId);
        setCast(credits);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <ContainerCast>
      {isLoading && <Loader />}

      <h2>Cast</h2>
      <CastList>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={name}
                width={120}
              />
              <p>
                <b>{name}</b>
              </p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
      </CastList>
    </ContainerCast>
  );
};

export default Cast;
