import React, { Component } from 'react'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import CityCard from '../../components/CityCard/';
import CityGrid from '../../components/CityGrid/CityGrid';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideBar />
        <div className="home__content">
          <NavBar />
          <CityGrid>
            <CityCard city="New York" />
            <CityCard city="Paris" />
            <CityCard city="New Amsterdam" />
            <CityCard city="Colorado" />
          </CityGrid>
        </div>

      </div>
    )
  }
}

export default Home