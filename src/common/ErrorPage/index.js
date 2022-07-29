import { Wrapper, Icon, Header, Text, Paragaph, Button } from "./styled";

const ErrorPage = () => {
  return (
    <Wrapper>
      <Icon />
      <Header>OOOps! Something went wrong...</Header>
      <Text>
        <Paragaph>
          Please check your newtork connection <br />
          and try again
        </Paragaph>
      </Text>
      <Button>Back to home page</Button>
    </Wrapper>
  );
};

export default ErrorPage;
