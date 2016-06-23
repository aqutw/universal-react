import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home0 from './containers/Home0';
import User from './containers/User';
import NotFound from './containers/NotFound';
import Home from './containers/Home';
import Category from './containers/Category'
import Photography from './containers/Photography'

export default (
  <Route component={App}>
    <Route path='/' component={Home0}>
      <IndexRoute component={Home} />
      <Route path="category/:category" component={Category}/>
      <Route path="photography" component={Photography}/>
    </Route>
    <Route path='user/:id' component={User} />
    <Route path="*" component={NotFound} />
  </Route>
);
