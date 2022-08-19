import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./Icon.svg";

export const Wrapper = styled.main`
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1384px;
`;

export const Icon = styled(NoResultsIcon)`
  width: 600px;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }
`;

export const Photo = styled.div`
  text-align: center;
`;
