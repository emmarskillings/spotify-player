import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';

const NotFound = () => (
  <>
    <Header />
    <Wrapper>
      Page not found. Go to <Link to="/">Home Page</Link>.
    </Wrapper>
  </>
);

export default NotFound;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
