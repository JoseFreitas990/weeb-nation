import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: auto;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;

  }

  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    color: #fff;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: 'League Spartan', sans-serif;
  }

 body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overscroll-behavior-y: none;
    -webkit-overflow-scrolling: touch;
      background-color: #000;
    overflow-x: hidden;
       /* @media (max-width: 1080px) {
    background-color: #1B1B1B;
  } */
    scroll-behavior: smooth;

  }

 
  a {
    color: currentColor;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  textarea {
    resize: none;
  }
h1,h2,h3,h4,h5,h6,input{
    margin: 0;
    padding: 0;
}

 
`;

export default GlobalStyles;
