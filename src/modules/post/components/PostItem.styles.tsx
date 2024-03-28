import styled from "styled-components";

export const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.black};
  width: 400px;
  height: 500px;
  border: 1px solid black;
  padding: ${({ theme }) => theme.dimensions.medium};
  font-size: ${({ theme }) => theme.dimensions.large};

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`;

export const Name = styled.h4`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Comments = styled.h5`
  color: ${({ theme }) => theme.colors.lightOrange};
`;
