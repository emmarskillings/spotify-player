import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from "styled-components";

import store from './store';
import theme from './theme';
import App from './App';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,400i,600,600i&display=swap');
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
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
