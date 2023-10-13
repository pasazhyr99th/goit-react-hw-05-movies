import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  padding: 20px;
`;

export const Item = styled.li`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #1f1f1f;

  &:hover {
    color: tomato;
    cursor: pointer;
  }
`;