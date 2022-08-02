import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { MovieList } from "../features/movies/MovieList";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
        <MovieList />
    </ThemeProvider>
  );
};
