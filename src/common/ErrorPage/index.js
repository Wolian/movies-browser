import {
  Container,
  Icon,
  Span,
  Header,
  Text,
  Paragaph,
  ButtonLink,
} from "./styled";

export const ErrorPage = () => {
  return (
    <Container>
      <Icon />
      <Header>
        <Span>OOOps!</Span> Something went wrong...
      </Header>
      <Text>
        <Paragaph>Please check your newtork connection and try again</Paragaph>
      </Text>
      <ButtonLink to="/">Back to home page</ButtonLink>
    </Container>
  );
};
