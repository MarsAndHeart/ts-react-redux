import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </Router>
  );
};
export default Routers;
