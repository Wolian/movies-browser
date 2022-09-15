import { Header, Icon, Photo, Container } from "./styled";

export const NoResultsPage = () => {
  return (
    <Container>
      <Header>Sorry, there are no results for </Header>
      <Photo>
        <Icon />
      </Photo>
    </Container>
  );
};
