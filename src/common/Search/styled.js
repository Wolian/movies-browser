import styled from "styled-components";

export const WrpapperSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 26px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 32px;
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
`;
