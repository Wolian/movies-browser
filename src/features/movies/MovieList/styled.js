import styled from "styled-components";

export const MovieWrapper = styled.main`
  margin: 0 auto;
  padding: 0 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-gap: 24px;

  @media (max-width: 635px) {
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0px;
  text-align: left;
`;
