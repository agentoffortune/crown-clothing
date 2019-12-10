import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 480px) {
            padding: 10px;
        }
    }
    
    a {
        color: black;
        text-decoration: none;
    }
    
    a:hover {
        color: blue;
        text-decoration: underline;
    }
    
    * {
        box-sizing: border-box;
    }
`

export default GlobalStyle;