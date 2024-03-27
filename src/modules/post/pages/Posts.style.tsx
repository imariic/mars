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
  font-size: 32px;
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
  margin-top: 24px;
  background-color: ${({ theme }) => theme.lighterOrange};
`;
