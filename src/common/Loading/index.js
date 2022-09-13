import { Container, Spinner } from "./styled";

export const Loading = ({ title }) => (
  <Container>
    <h1>{title}</h1>
    <Spinner></Spinner>
  </Container>
);
