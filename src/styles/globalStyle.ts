import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
  }

  h2 {
    font-size: 21px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.004em;
    text-align: left;
  }

  h5 {
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
    text-align: left;
  }

  #__next {
    display: flex;
    flex-direction: column;
    max-width: 42rem;
    min-height: 100vh;
    margin: 0 auto;
  }
  
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body, button, input, textarea {
    font-family: 'Noto Sans KR', sans-serif;
  }

  textarea {
    border: none;
    outline: none;
    resize: none;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
    padding: 0;
  }

  input {
    outline: none;
    border: none;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
