import React, { Component } from "react";
import { getData } from "../FetchService";
import Nav from '../navbar/Nav';
import Foo from '../navbar/Foo';

class Bookings extends Component {
  state = {
    bookings: []
  };
  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.replace("/login");
    }
  }
  async componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const bookings = await getData(`bookings/${user.id}`);
    this.setState({ bookings });
  }

  makeTable = () => {
      return this.state.bookings.map((item, index) => {
          return (
              <tr key={'booking'+index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.source}</td>
                  <td>{item.destination}</td>
                  <td>{item.seats}</td>
                  <td>{(new Date(item.date).toDateString())}</td>
              </tr>
          );
      })
  }

  render() {
    return (
        <div>
            <Nav history={this.props.history} />
            <div className="container">
                <h3 style={{ margin: 30 }}>Your Bookings</h3>
                <table className="table table-hover">
                    <thead>
                        <td>S. no</td>
                        <td>Name</td>
                        <td>From</td>
                        <td>To</td>
                        <td>Seats</td>
                        <td>Date</td>
                    </thead>
                    <tbody>
                        {this.makeTable()}
                    </tbody>
                </table>
            </div>
            <Foo history={this.props.history} />
        </div>
    );
  }
}

export default Bookings;
