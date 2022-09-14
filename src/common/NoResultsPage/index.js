import { Wrapper } from "../Wrapper/styled";
import { Header, Icon, Photo, Container } from "./styled";

export const NoResultsPage = () => {
  return (
    <Wrapper>
      <Container>
      <Header>Sorry, there are no results for </Header>
      <Photo>
        <Icon />
      </Photo>
    </Container>
    </Wrapper>
  );
};
