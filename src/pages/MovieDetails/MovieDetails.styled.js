import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 20px;
  gap: 25px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
`;

export const ContainerAdditionaInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ListAdditionalInfo = styled.ul`
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const LinkAdditionalInfo = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: #4a4a4a;
  cursor: pointer;

  &:hover {
    color: tomato;
  }
`;

export const Button = styled.button`
  margin-left: 5px;
  padding: 6px 15px;
  font: inherit;
  cursor: pointer;
  border: 1px solid #1f1f1f;
  color: #1f1f1f;
  font-weight: 700;
  font-size: 18px;
  border-radius: 4px;

  &:hover {
    color: tomato;
    border: 1px solid tomato;
    background-color: #ffcebd;
  }
`;
