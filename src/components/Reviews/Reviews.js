import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'service/api';
import {
  ContainerReviews,
  ReviewsItem,
  ReviewsText,
  NoReviews,
} from './Reviews.styled';
import Loader from 'components/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviewsData = async () => {
      setIsLoading(true);

      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviewsData();
  }, [movieId]);

  return (
    <ContainerReviews>
      {isLoading && <Loader />}

      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsText>
                <b>Author: {author}</b>
              </ReviewsText>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))
        ) : (
          <NoReviews>We don't have any reviews for this movie.</NoReviews>
        )}
      </ul>
    </ContainerReviews>
  );
};

export default Reviews;
