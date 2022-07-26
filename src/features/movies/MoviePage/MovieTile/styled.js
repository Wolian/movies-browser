import styled from "styled-components";
import { ReactComponent as StarIcon } from "../Vector.svg";

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
`;

export const Poster = styled.img`
  grid-area: poster;
`;

export const InfoWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 0px;
  gap: 24px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  margin: 0;
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  line-height: 120%;
  margin: 0;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
`;

export const Production = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;
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
`;

export const Genre = styled.span`
  background-color: ${({ theme }) => theme.colors.mystic};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 8px 16px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

export const Icon = styled(StarIcon)`
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-left: 8px;
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin: 0;
`;

export const Description = styled.div`
  grid-area: description;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};
`;