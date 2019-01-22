import React, { Component } from 'react'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import CityCard from '../../components/CityCard/';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideBar />
        <div>
          <NavBar />
          <CityCard city="New York" />
        </div>
      </div>
    )
  }
}

export default Home