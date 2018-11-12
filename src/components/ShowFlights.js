import React, { Component } from 'react';
import Row from './Row';

class ShowFlights extends Component {
    
    makeTable = () => {
        if(this.props.flights.length) {
            return this.props.flights.map((item, index) => {
                return (
                    <Row key={`flights` + index} {...item} refresh={this.props.refresh} date={this.props.date}/>
                );
            })
        }
    }

    render() {
        return(
            <div>
            <table className="table table-bordered" style={{ margin: 30 }}>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Total Seats</td>
                        <td>Available Seats</td>
                        <td>Book</td>
                    </tr>
                </thead>
                {this.makeTable()}
            </table>
            </div>
        )
    }
}

export default ShowFlights;