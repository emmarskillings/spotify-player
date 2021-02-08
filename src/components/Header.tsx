import * as React from 'react';
import styled from 'styled-components';

import LogoGreen from '../images/Spotify_Icon_RGB_Green.png';

const Header = () => (
  <AppHeader><Icon />Spotify Artist Search </AppHeader>
);

export default Header;

const AppHeader = styled.div`
  height: 70px;
  max-width: 100vw;
  font-size: 24px;
  line-height: 70px;
  padding-left: 20px;
  background-color: #222222;
  color: white;
  display: flex;
`

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${LogoGreen});
  background-size: cover;
  margin: 15px 15px 0 0;
`;
