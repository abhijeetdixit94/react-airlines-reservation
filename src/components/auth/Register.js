import React, { Component } from "react";
import { postData } from "../FetchService";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    msg: ""
  };

  register = async () => {
    const body = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    };

    try {
      const result = await postData("user/register", body);
      if(result) {
        localStorage.setItem('user', JSON.stringify(body));
        this.props.history.replace('/')        
      } else {
        alert('Server Error\nTry Again');
      }
    } catch (e) {
      console.log("register", e);
    }
  };
  render() {
    
    return (
      <div className="container" style={{ padding: 20 }}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Register</h1>
            <table className="table">
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email-Address"
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
                    className="btn btn-danger"
                    onClick={() => this.register()}
                  >
                    Register
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

export default Register;
