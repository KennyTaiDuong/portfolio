import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    min-height: 100vh;
    color: #2d2e32;
  }

  button, a {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export default GlobalStyle