import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif
    }
    html {
        min-height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
    }
    ul {
        list-style: none;
    }

`;
