

import { PersonTile } from "../../../../common/PersonTile";
import { Wrapper, Header, Container } from "./styled";

export const MoviePeople = ({ title }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Container>
        <PersonTile name={"Mulan"} role={"Mulan"} />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
        <PersonTile />
      </Container>
    </Wrapper>
  );
};