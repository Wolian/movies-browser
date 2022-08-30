import { PersonTile } from "../PersonTile";
import { Wrapper, Header, Container } from "./styled";

export const MoviePeople = ({ title, items }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Container>
        {items.map((item) => (
          <PersonTile
            key={item.id}
            personId={item.id}
            name={item.name}
            role={item.character ? item.character : item.department}
            photo={item.profile_path}
          />
        ))}
      </Container>
    </Wrapper>
  );
};
