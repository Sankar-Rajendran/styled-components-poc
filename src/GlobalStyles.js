import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'Arial';
    font-style: normal;
    font-weight: normal;
  }
  h2, h3 {
    font-family: '${props => props.theme.fontFamily}';
    font-weight: normal;
    font-style: normal;
    color:${props => props.theme.headerColor};
  }
`;