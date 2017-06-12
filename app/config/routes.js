import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Search from "../components/Search"
import Results from "../components/Results"

import Child from "../components/Child"

import Main from "../components/Main";

const routes = (

  <Router history={browserHistory}>

    <Route path="/" component={Main} />

      <Route path="search" component={Search} />

      <Route path="Results" component={Results} />

      <Route path="child" component={Child} />


    {/* <IndexRoute component={Main} /> */}

  </Router>

);

export default routes;
