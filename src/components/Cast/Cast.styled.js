import styled from '@emotion/styled';

export const ContainerCast = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  flex-basis: calc((100% - 40px) / 5);
  margin-right: 10px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  padding: 10px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  border-radius: 5px;

  &:nth-of-type(5n) {
    margin-right: 0;
  }
`;
