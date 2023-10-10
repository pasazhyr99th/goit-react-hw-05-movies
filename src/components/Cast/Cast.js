import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP
  // }, []);

  return <div>{movieId}</div>;
};

export default Cast;
