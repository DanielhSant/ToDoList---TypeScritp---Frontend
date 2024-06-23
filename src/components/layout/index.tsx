// GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";

//Uso do modo Dark e Light

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => (props.theme.darkTheme ? '#272727' : '#fff')};
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        color: ${(props) => (props.theme.darkTheme ? 'white' : 'black')};
    }
`;

export default GlobalStyles;
