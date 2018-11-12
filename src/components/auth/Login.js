import React, { Component } from "react";
import { postData } from '../FetchService';

class Login extends Component {
  state = {
    email: "",
    password: "",
    msg: ""
  };

  login = async () => {
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    try {
      const result = await postData('user/login', body);
      if(result) {
        localStorage.setItem('user', JSON.stringify(result));
        this.props.history.replace('/')
      } else {
        alert('Invalid credentials');
      }
    }
     catch(e) {
       console.log('login', e);
     }
  };

  render() {
    return (
      <div className="container" style={{ padding: 20 }}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Login</h1>
            <table className="table">
              <tr>
                <td>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.login()}
                  >
                    Login
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
