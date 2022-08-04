import { PersonTile } from "../../../../common/PersonTile";
import { Wrapper, Header, Container } from "./styled";

export const MoviePeople = ({ title, items }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Container>
        {items &&
          items.map((item) => (
            <PersonTile
              key={item.cast_id}
              name={item.name}
              role={item.character ? item.character : item.department}
              photo={item.profile_path}
            />
          ))}
      </Container>
    </Wrapper>
  );
};
