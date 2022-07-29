import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import Navigation from "../common/Navigation";
import ErrorPage from "../common/ErrorPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation />
      <ErrorPage />
      
    </ThemeProvider>
  );
};
