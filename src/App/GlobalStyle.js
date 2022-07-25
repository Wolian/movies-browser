import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, ::after, ::before {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.colors.mercury};
        color: ${({theme}) => theme.colors.black}
    }
`;