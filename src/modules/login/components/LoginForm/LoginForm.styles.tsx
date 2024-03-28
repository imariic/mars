import styled from "styled-components";

export const Container = styled.form`
  width: 400px;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.dimensions.medium};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.orange};
  text-align: center;
`;

export const SubmitButton = styled.input`
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.dimensions.medium};
  width: 100px;
  height: 60px;
  border-radius: ${({ theme }) => theme.dimensions.medium};
  border: 2px solid ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.lighterOrange};
`;

export const ErrorMessage = styled.p`
  height: 30px;
  color: red;
`;
