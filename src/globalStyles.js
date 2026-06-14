import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
}

/* Prevent horizontal scroll on all pages */
html, body {
    max-width: 100vw;
    overflow-x: hidden;
}

`

export default GlobalStyle;