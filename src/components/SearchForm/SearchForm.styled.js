import styled from '@emotion/styled';

export const SearchFormStyle = styled.form`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 6px 7px;
  cursor: pointer;
  border: 1px solid #1f1f1f;
  font-weight: 400;
  font-size: 18px;
  margin-right: 10px;
  border-radius: 4px;
  outline: none;

  &:hover {
    color: tomato;
    border: 1px solid tomato;
  }
`;

export const Button = styled.button`
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
