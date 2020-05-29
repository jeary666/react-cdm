import React from "react";
import Header from "./components/header/header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.scss'

import HomePage from "./pages/homePage";
import Login from "./pages/login";

function App() {
  return (
    <div className="app">
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
