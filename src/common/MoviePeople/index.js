import { PersonTile } from "../PersonTile";
import { Wrapper } from "../Wrapper/styled";
import { Container, Header, PersonContainer } from "./styled";

export const MoviePeople = ({ title, items }) => {
  return (
    <Wrapper>
      <Container>
      <Header>{title}</Header>
      <PersonContainer>
        {items?.map((item) => (
          <PersonTile
            key={item.id}
            personId={item.id}
            name={item.name}
            role={item.character ? item.character : item.department}
            photo={item.profile_path}
          />
        ))}
      </PersonContainer>
    </Container>
    </Wrapper>
  );
};
