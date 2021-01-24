import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  p {
      margin: 0 0 16px;
      padding: 0;
  }
  ul {
      margin: 0 0 16px;
      padding: 0;
  }
  a {
      color: ${props => props.theme.colors.black};
  }
`;

export { GlobalStyles };
