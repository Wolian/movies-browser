import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../features/movies/MoviePage/Vector.svg";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1368px;
  //width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "poster content content"
    "poster description description";
  grid-column-gap: 40px;
  padding: 40px;
  margin: 64px auto;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 21px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-areas:
      "poster content"
      "poster content"
      "description description";
    padding: 16px;
    gap: 16px;
    margin: 16px 0;
  } ;
`;

export const Poster = styled.img`
  grid-area: poster;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 114px;
    height: 169px;
  } ;
`;

export const InfoWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
    gap: 8px;
  } ;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 500;
    font-size: 4.5vw;
    line-height: 130%;
  } ;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    line-height: 130%;
  } ;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  } ;
`;

export const Production = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;

export const Country = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const RlsDate = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const GenresWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 10px;
    line-height: 110%;
  } ;
`;

export const Genre = styled.span`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4px 8px;
    gap: 8px;
  } ;
`;

export const Rating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  } ;
`;

export const Icon = styled(StarIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 16px;
    width: 16px;
  } ;
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 600;
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.colors.waterloo};
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export const Description = styled.div`
  grid-area: description;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    word-wrap: break-word;
  } ;
`;
