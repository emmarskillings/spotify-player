import * as React from 'react';
import styled from 'styled-components';

const Header = () => (
  <AppHeader>Spotify Artist Search</AppHeader>
);

export default Header;

const AppHeader = styled.div`
  height: 60px;
  max-width: 100vw;
  font-size: 24px;
  background-color: lightgrey;
  line-height: 60px;
  padding-left: 20px;
`
