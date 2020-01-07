import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './components/Home';
import List from './components/PhotoList/Container';

export default () => {
  return (
    <Router>
      <Switch>
        <Route 
          path="/list/:query/:collection"
          children={<List />}
        />
        <Route
         path="/" 
         children={<Home />}
         />
      </Switch>
    </Router>
  );
}
