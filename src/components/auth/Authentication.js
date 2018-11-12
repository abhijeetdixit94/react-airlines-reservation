import React, { Component } from "react";
import Login from './Login';
import Register from './Register.js'
import Foo from '../navbar/Foo';

class Authentication extends Component {

  componentWillMount() {
    if(localStorage.getItem('user')) {
      this.props.history.replace('/home')
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <Login history={this.props.history} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <Register history={this.props.history} />
          </div>
        </div>
        <Foo history={this.props.history}/>
      </div>
    );
  }
}

export default Authentication;
