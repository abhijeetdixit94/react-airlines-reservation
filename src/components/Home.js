import React, { Component } from "react";
import Nav from './navbar/Nav';
import Foo from './navbar/Foo';
import ShowFlights from './ShowFlights';
import { getData } from './FetchService';

class Home extends Component {
  
  state = {
    cities: [],
    flights: [],
    to: "",
    from: "",
    date: ""
  }

  componentWillMount() {
    if (!localStorage.getItem("user")) {
      this.props.history.replace("/login");
    }
  }

  async componentDidMount() {
    try {
      const cities = await getData(`city/allCities`);
      this.setState({ cities });
    } catch (e) {
      console.log(e + 'Home')
    }
  }

  fillList = () => {
    return this.state.cities.map((item, index) => {
      return (
        <option value={item.name} key={index} />
      )
    })
  }

  flights = async () => {
    const { to, from, date } = this.state;
    if(to !== "" && from !== "" && date !== "") {
      const flights = await getData(`flights/fetchFlights/${from}/${to}/${date}`);
      this.setState({ flights });
    } else {
      alert('Please Fill both the fields');
    }
  }


  render() {
    return (
      <div>
        <Nav history={this.props.history} />
        <div className="container" style={{ marginTop: 30 }}>
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <input type="text" id="from" list="fromList" placeholder="Enter the source city" className="form-control" onChange={e => this.setState({ from: e.target.value })} />
            </div>
            <div className="col-lg-3 col-sm-12">
              <input type="text" id="to" list="toList" placeholder="Enter the Destination city" className="form-control" onChange={e => this.setState({ to: e.target.value })}/>
            </div>
            <div className="col-lg-3 col-sm-12">
              <input type="date" id="date" className="form-control" onChange={e => this.setState({ date: e.target.value })}/>
            </div>
            <div className="col-lg-2 col-sm-12">
              <button className="btn btn-primary" onClick={this.flights}>
                Flights
              </button>
            </div>
          </div>
        </div>
        <ShowFlights flights={this.state.flights} refresh={this.flights} date={this.state.date} style={{ marginTop: 30 }}/>
        <datalist id="toList">
          {this.fillList()}
        </datalist>
        <datalist id="fromList">
          {this.fillList()}
        </datalist>
        <Foo history={this.props.history} />
      </div>
    );
  }
}

export default Home;
