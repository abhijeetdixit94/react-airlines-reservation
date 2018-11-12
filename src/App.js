import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Authentication from "./components/auth/Authentication";
import Home from "./components/Home";
import Logout from "./components/auth/Logout";
import Bookings from './components/bookings/Bookings';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

export default App;
