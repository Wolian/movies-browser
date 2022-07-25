import styled from "styled-components";

export const WrpapperSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 26px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 32px;

  @media (max-width: 900px) {
    width: 90%;
    margin-top: 13px;
  }

  @media (max-width: 570px) {
    padding: 8px 12px;
  }
`;

export const IconSearch = styled.img`
  margin-right: 16px;
`;

export const Input = styled.input`
  width: 340px;
  border: none;
  font-size: 16px;
  font-weight: 400;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }

  @media (max-width: 1080px) {
    width: 240px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 570px) {
    font-size: 13px;
  }
`;
