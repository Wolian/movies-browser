import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./Icon.svg";

export const Wrapper = styled.section`
  margin-top: 195px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const Icon = styled(ErrorIcon)``;

export const Header = styled.h1`
  margin: 12px 0 0 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
`;

export const Paragaph = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  padding: 16px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;
