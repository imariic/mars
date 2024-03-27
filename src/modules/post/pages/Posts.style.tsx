import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  height: 100%;
`;

export const PostsContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const LoadMoreButton = styled.button`
  position: relative;
  width: 200px;
  height: 50px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 24px;
  background-color: ${({ theme }) => theme.lighterOrange};
`;
