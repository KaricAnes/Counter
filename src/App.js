import React, { Component } from "react";

import Counter from "./containers/Counter/Counter";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, Redirect } from "react-router-dom";
import Results from "./components/Results/Results";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/results" component={Results} />

        <Route path="/" exact component={Counter} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
