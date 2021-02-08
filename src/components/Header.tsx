import * as React from 'react';
import styled from 'styled-components';

import SpotifyIconGreen from '../images/Spotify_Icon_RGB_Green.png';

// Application header
const Header = () => (
  <AppHeader>
    <SpotifyIcon />Spotify Artist Search
  </AppHeader>
);

export default Header;

const AppHeader = styled.div`
  height: 80px;
  max-width: 100vw;
  font-size: 24px;
  line-height: 80px;
  padding-left: 20px;
  background-color: #222222;
  color: white;
  display: flex;
`;

export const SpotifyIcon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${SpotifyIconGreen});
  background-size: cover;
  margin: 20px 15px 0 0;
`;
