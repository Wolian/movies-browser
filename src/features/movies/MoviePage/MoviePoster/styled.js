import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Vector.svg";

export const Header = styled.section`
  display: flex;
  justify-content: center;
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 72vw;
  width: fill-available;
  z-index: -1;
`;

export const MainInfo = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  color: white;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  } ;
`;

export const Rating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 4px;
    gap: 8px;
  } ;
`;

export const Icon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 16px;
    width: 16px;
    align-self: flex-start;
  } ;
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 600;
    font-size: 14px;
  } ;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin-left: 2px;
  } ;
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin: 0;
    align-self: baseline;
  } ;
`;
