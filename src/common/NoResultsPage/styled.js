import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./Icon.svg";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1384px;
  margin: 0 auto;
  padding: 10px;
`;

export const Icon = styled(NoResultsIcon)`
  width: 50%;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 80%;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Photo = styled.div`
  text-align: center;
`;
