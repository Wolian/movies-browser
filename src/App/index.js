import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { MoviePage } from "../features/movies/MoviePage";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import Navigation from "../common/Navigation";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <div className="App">
        <MoviePage />
      </div>
    </ThemeProvider>
  );
};
