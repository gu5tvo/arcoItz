import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    //pink

    --PINK: #FFCCE4;
    --RED: #B70000;

    --GRAY: #F2F2F2;
    --GRAY-DARK: #C6C6C6;

    --BLUE: #48A7FF;
    --BLUE-DARK: #0A2A5E;

    --GRADIENTE :linear-gradient(180deg, #0077B6 0%, rgba(0, 119, 182, 0) 100%);
  }

  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    background-color: #F5F5F5;
    font-family: 'Inter', sans-serif;
    font-size: clamp(0.8rem, 1vw, 2rem)
  }

  button{
    cursor: pointer;
  }
`