import styled from "styled-components";

export const Container = styled.form`
  width: 400px;
  height: 400px;
  border: 2px solid ${({ theme }) => theme.orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.orange};
  text-align: center;
`;

export const SubmitButton = styled.input`
  margin-top: auto;
  margin-bottom: 24px;
  width: 100px;
  height: 60px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.orange};
  background-color: ${({ theme }) => theme.lighterOrange};
`;

export const ErrorMessage = styled.p`
  height: 30px;
  color: red;
`;
