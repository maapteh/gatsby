import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.darkblue};
    color: white;
  }
  html {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  p {
      margin: 0 0 16px 0;
      padding: 0;
  }
`;

export { GlobalStyles };
