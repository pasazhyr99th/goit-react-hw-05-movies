import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px #c7bab5;
  margin-bottom: 15px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #1f1f1f;

  &:hover {
    color: tomato;
    cursor: pointer;
  }
`;
