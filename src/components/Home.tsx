import * as React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import styled from "styled-components";

const Home = () => (
  <>
    <Header />
    <LoginButton >
      <a href="http://localhost:8888/login">Login with Spotify</a>
    </LoginButton>
  </>
  );

export default connect()(Home);

const LoginButton = styled.button`
  height: 50px;
  width: 200px;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
