import styled from "styled-components";

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 16px;
  gap: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: transform 0.5s, box-shadow 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: ${({ theme }) => theme.borderRadiusSmall};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8px;
  }

  &:hover {
    transform: translate(0, -15px);
    box-shadow: ${({ theme }) => theme.boxShadowHover};
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
`;

export const Name = styled.p`
  margin: 14px 0px 0px 0px;
  text-align: center;
  color: ${({ theme }) => theme.colors.woodSmoke};
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
    margin: 0;
  } ;
`;

export const Role = styled.p`
  margin: 8px 0px 0px 0px;
  text-align: center;
  color: ${({ theme }) => theme.colors.waterloo};
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 13px;
    margin: 0;
  } ;
`;
