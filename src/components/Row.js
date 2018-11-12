import React, { Component } from "react";
import { postData } from './FetchService';

class Row extends Component {
  book = async () => {
        await this.props.refresh()
        const seats = prompt('Number of seats');
        if(seats > this.props.seats - this.props.bookedrecords) {
            alert(seats + ' seats are not available');
            return;
        }
        const user = JSON.parse(localStorage.getItem("user"));

        const body = {
            flightid: this.props.id,
            userid: user.id,
            seats,
            date: this.props.date
        };
        console.log('body', body);
        try {
            const result = await postData('flights/book', body);
            if(result) {
                alert('Seats booked successfully');
                this.props.refresh()
            } else {
                alert('Failed to book tickets');
            }
        } catch (e) {
            console.log(e + "Row");
        }
  };

  render() {
    const { id, name, seats, bookedrecords } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{seats}</td>
        <td>{seats - bookedrecords}</td>
        <td>
          <button className="btn btn-danger" onClick={this.book}>
            Book
          </button>
        </td>
      </tr>
    );
  }
}

export default Row;
