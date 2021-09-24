import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Arial;
    padding: 0;
    margin: 0;
  }

  a:visited {
    color: inherit;
  }
`;

export default GlobalStyle;