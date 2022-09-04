import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1368px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const CastCrewSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  grid-gap: 24px;
`;

export const TileCastCrew = styled.h2`
  font-size: 36px;
  margin-top: 64px;
`;