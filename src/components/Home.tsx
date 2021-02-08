import * as React from 'react';
import { connect } from 'react-redux';

import Header, { Icon } from './Header';
import styled from "styled-components";

const Home = () => (
  <>
    <Header />
    <LoginButton >
      <Link href="http://localhost:8888/login">LOGIN WITH SPOTIFY</Link>
      <LoginIcon />
    </LoginButton>
  </>
  );

export default connect()(Home);

const LoginButton = styled.div`
  height: 60px;
  width: 350px;
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  border: 2px solid #222222;
  border-radius: 5px;
  
  : hover {
    color: white;
    background-color: #222222;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
`

const LoginIcon = styled(Icon)`
  margin: 10px 0 0 10px;
`;
