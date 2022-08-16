import {
  Wrapper,
  Icon,
  Span,
  Header,
  Text,
  Paragaph,
  ButtonLink,
} from "./styled";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Icon />
      <Header>
        <Span>OOOps!</Span> Something went wrong...
      </Header>
      <Text>
        <Paragaph>
          Please check your newtork connection <br />
          and try again
        </Paragaph>
      </Text>
      <ButtonLink to="/">Back to home page</ButtonLink>
    </Wrapper>
  );
};

export default ErrorPage;
