import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 13px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px 10px
  }

  button {
    cursor: pointer;
  }
`;
