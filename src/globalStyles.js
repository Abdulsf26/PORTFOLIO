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

/* Prevent horizontal scroll on all pages but allow native vertical scroll */
html, body {
    max-width: 100vw;
    overflow-x: hidden;
}

@media (max-width: 768px) {
  body {
    min-height: 100dvh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}
`

export default GlobalStyle;