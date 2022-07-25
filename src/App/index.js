import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
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
        <h1>Movies Browser</h1>
        <h2>test</h2>
        <p>Test</p>
      </div>
    </ThemeProvider>
  );
};
