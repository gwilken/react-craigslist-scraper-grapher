import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Search from "../components/Search"
import Results from "../components/Results"
import Main from "../components/Main";

const routes = (

  <Router history={browserHistory}>

    <Route path="/" component={Main}>

      <Route path="Results" component={Results} />

    </Route>

    {/* <IndexRoute component={Main} /> */}

  </Router>

);

export default routes;
