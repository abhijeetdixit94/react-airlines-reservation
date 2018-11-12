import React, { Component } from "react";

class Foo extends Component {
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.replace("/login");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
        <div className="navbarNav">
    
          <p className="navbar-brand">
           Airlines &copy; 2018
          </p>
          
        </div>
      </nav>
    );
  }
}

export default Foo;
