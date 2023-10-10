import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP
  // }, []);

  return <div>Great film: {movieId}</div>;
};

export default Reviews;
