import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.black};
  width: 400px;
  height: 500px;
  border: 1px solid black;
  padding: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.white};
`;

export const Name = styled.h4`
  color: ${({ theme }) => theme.orange};
`;

export const Comments = styled.h5`
  color: ${({ theme }) => theme.lightOrange};
`;
