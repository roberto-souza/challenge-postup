import { createGlobalStyle } from 'styled-components';

import { colors } from '~/styles';

import Saira from '~/assets/font/Saira.woff';
import Saira2 from '~/assets/font/Saira.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Saira';
    src: url(${Saira}) format('woff'), url(${Saira2}) format('woff2');
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

  html, body, #root {
    font-family: 'Saira', sans-serif;
    height: 100vh;
  }

  body {
    background-color: ${colors.bgBody};
    color: ${colors.white};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
    font-family: 'Saira', sans-serif;

    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 1rem;
    font-family: 'Saira', sans-serif;
  }
`;
