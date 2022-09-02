import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 1368px;
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
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  max-width: 312px;
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

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 500;
    font-size: 4.5vw;
    line-height: 1.3;
  } ;
`;

export const SectionBirth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    line-height: 1.3;
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
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  } ;
`;

export const Birth = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;

export const Biography = styled.div`
  grid-area: description;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    word-wrap: break-word;
  } ;
`;
