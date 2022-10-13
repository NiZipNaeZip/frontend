import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
  }

  h2{
    font-family: Apple SD Gothic Neo;
    font-size: 21px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.004em;
    text-align: left;
  }
  h5{
    font-family: Noto Sans KR;
    font-size: 21px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }
  #__next {
    display: flex;
    flex-direction: column;
    max-width: 42rem;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 2rem;
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
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
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
