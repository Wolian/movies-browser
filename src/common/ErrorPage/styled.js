import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./Icon.svg";

export const Wrapper = styled.section`
  margin-top: 195px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 80px;
  } ;
`;

export const Icon = styled(ErrorIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90px;
    height: 79px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 70px;
    height: 59px;
  } ;
`;

export const Header = styled.h1`
  margin: 12px 0 0 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 10px 0 0 0;
    font-size: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
  } ;
`;

export const Span = styled.span``;

export const Text = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  } ;
`;

export const Paragaph = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 136%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  padding: 16px 24px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 14px 22px;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 12px 20px;
    font-weight: 500;
  }

  &:hover {
    cursor: pointer;
    background-color: #2661d8;
    transition: 0.2s;
  }

  &:active {
    background-color: rgba(0, 68, 204, 0.9);
  }
`;
