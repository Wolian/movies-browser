import { Header, Icon, Photo, Wrapper } from "./styled";

export const NoResultsPage = () => {
  return (
    <Wrapper>
      <Header>Sorry, there are no results for </Header>
      <Photo>
        <Icon />
      </Photo>
    </Wrapper>
  );
};
