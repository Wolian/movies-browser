import styled, { css } from "styled-components";

export const Img = styled.img`
  width: 7px;
  height: 11px;

  ${({ active }) =>
    active &&
    css`
      filter: invert(15%) sepia(55%) saturate(5710%) hue-rotate(219deg)
        brightness(98%) contrast(102%);
    `};

  ${({ rotation }) =>
    rotation &&
    css`
      transform: rotate(180deg);
    `};
`;
