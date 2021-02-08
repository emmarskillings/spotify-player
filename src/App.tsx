import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ArtistSearch from './components/ArtistSearch';
import Albums from './components/Albums';
import Redirect from './components/Redirect';
import NotFound from './components/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/artist-search" component={ArtistSearch} />
      <Route path="/albums" component={Albums} />
      <Route path="/redirect" component={Redirect} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
