import styled from "styled-components";
import { Link } from "react-router-dom";

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media (max-width: 635px) {
    flex-direction: row;
  }
`;

export const MovieImage = styled.div`
  width: 100%;

  @media (max-width: 635px) {
    max-width: 50%;
    margin-right: 20px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 645px) {
    justify-content: flex-start;
  }
`;

export const Description = styled.div`
  padding: 5px 0;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const MovieLink = styled(Link)`
  color: ${({ theme }) => theme.colors.woodSmoke};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Year = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: 8px;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.mystic};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;

  @media (max-width: 450px) {
    padding: 4px 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 450px) {
    width: 16px;
    height: 16px;
  }
`;

export const Rate = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodSmoke};
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.waterloo};
`;
