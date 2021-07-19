import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Login from '../views/Login';
import FailRegistro from '../views/FailRegistro';
import Gracias from '../views/Gracias';
import Registro from '../views/Registro';
import Ranking from '../views/Ranking';
import Error from '../views/Error';

function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
       <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/gracias" component={Gracias} />
        <Route exact path="/ups" component={FailRegistro} />
        <Route exact path="/ranking" component={Ranking} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default Routes;