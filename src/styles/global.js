import { createGlobalStyle } from 'styled-components';

import { colors } from '~/styles';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

  html, body, #root {
    font-family: 'Lexend Deca', sans-serif;
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

    &:focus {
      outline: none;
    }
  }
`;
