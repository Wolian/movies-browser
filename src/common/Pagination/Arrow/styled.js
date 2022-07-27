import styled, { css } from "styled-components";

export const Img = styled.img`
  width: 7px;
  height: 11px;
  margin-right: 4px;

  ${({ active }) =>
    active &&
    css`
      filter: invert(15%) sepia(55%) saturate(5710%) hue-rotate(219deg)
        brightness(98%) contrast(102%);
    `};

  ${({ rotation }) =>
    rotation &&
    css`
      margin-right: 0;
      margin-left: 4px;
      transform: rotate(180deg);
    `};
`;

export const ImgMobile = styled(Img)`
  display: none;

  @media (max-width: 720px) {
    display: inline;
    margin: 0;
  }
`;
