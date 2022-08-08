import styled from "styled-components";

export const Container = styled.main`
  margin: auto;
  margin-bottom: 40px;
  padding: 0 16px;
`;

export const Section = styled.div`
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 21px;
  } ;
`;