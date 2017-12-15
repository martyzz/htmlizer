import React, { Component } from "react";
import { Route, Switch } from "react-router";

import Navigator from "./Navigator";
import Home from "./sections/Home";
import Form from "./sections/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
