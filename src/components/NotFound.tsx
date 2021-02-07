import * as React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const NotFound = () => (
  <>
    <Header />
    Page not found. Go to <Link to="/">Home Page</Link>.
  </>
);

export default NotFound;
