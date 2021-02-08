import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from "styled-components";

import store from './store';
import theme from './theme';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "SF Pro", "Arial", sans-serif;
    color: #222222;
  }
`;

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
