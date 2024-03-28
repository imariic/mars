import { Input } from "components";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = styled(Input)`
  position: fixed;
  width: 250px;
  height: 50px;
  font-size: ${({ theme }) => theme.dimensions.large};
`;

export const PostsContainer = styled.section`
  padding-top: 70px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const LoadMoreButton = styled.button`
  width: 200px;
  height: 50px;
  margin-top: ${({ theme }) => theme.dimensions.medium};
  background-color: ${({ theme }) => theme.colors.lighterOrange};
`;
