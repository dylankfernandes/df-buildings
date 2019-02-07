import React, { Component } from 'react'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar/';
import CityCard from '../../components/CityCard/';
import CityGrid from '../../components/CityGrid/';
import Update from '../../components/Update/';
import Building from '../../components/Building';
import BuildingGrid from '../../components/BuildingGrid/BuildingGrid';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideBar />
        <div className="home__content">
          <NavBar />
          <CityGrid>

          </CityGrid>
          <Update />
          <BuildingGrid>

          </BuildingGrid>
        </div>
      </div>
    )
  }
}

export default Home