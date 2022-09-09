import { Container, Spinner } from "./styled";

const Loading = ({ title }) => (
  <Container>
    <h1>{title}</h1>
    <Spinner></Spinner>
  </Container>
);

export default Loading;
