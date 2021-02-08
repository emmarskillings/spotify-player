import * as React from 'react';
import Axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ArtistSearch from './components/ArtistSearch';
import Albums from './components/Albums';
import Redirect from './components/Redirect';
import NotFound from './components/NotFound';

const App = () => {
  Axios({
    method: 'GET',
    url: process.env.REACT_APP_API,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/artist-search" component={ArtistSearch} />
        <Route path="/albums" component={Albums} />
        <Route path="/redirect" component={Redirect} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
