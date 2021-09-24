import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Arial;
  }

  a:visited {
    color: inherit;
  }

  span.accent, a.accent {
    color: deepskyblue;
  }
`;

export default GlobalStyle;