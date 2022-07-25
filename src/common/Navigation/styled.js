import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 26px 0;
  background: ${({ theme }) => theme.colors.woodSmoke};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1368px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const NameWebsite = styled.h1`
  margin: 0;
  margin-left: 12px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.5px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Menu = styled.div`
  margin-left: 80px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  font-size: 14px;
  font-weight: 600;
`;

export const Item = styled.li`
  padding: 8px 24px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

// To będzie do usunięcia, kiedy wprowadzimy React Router. Jest to tymczasowy zabieg aby pokazać jak będzie wyglądał link aktywny.
export const LinkActive = styled.a`
  padding: 8px 24px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: opacity 0.5s;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 24px;
`;
