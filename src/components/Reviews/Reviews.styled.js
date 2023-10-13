import styled from '@emotion/styled';

export const ContainerReviews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const ReviewsItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const ReviewsText = styled.p`
  margin: 5px 0;
`;

export const NoReviews = styled.li`
  text-align: center;
  background-color: #f9f9f9;
`;
