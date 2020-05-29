import React from "react";
import Header from "../../components/header/header";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FlightOutPort from "../flightOutPort";
import RunState from "../runState";

function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
        <div>
          <Route exact path="/" component={FlightOutPort} />
          <Route path="/runState/:param" component={RunState} />
        </div>
      </Router>
    </div>
  );
}

export default App;
