import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    * {
        box-sizing: border-box;
        word-break: keep-all;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html, body {
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
`;