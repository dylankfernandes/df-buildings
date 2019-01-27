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
            <CityCard city="New York" />
            <CityCard city="Paris" />
            <CityCard city="New Amsterdam" />
            <CityCard city="Colorado" />
          </CityGrid>
          <Update />
          <BuildingGrid>
            <Building
              building="Statue of Liberty"
              address1="New York"
              address2="NY 10004"
              isAvailable={true}
              rent={37000}
            />
            <Building
              building="Empire State Building"
              address1="20 W 34th St"
              address2="New York, NY 10001"
              isAvailable={false}
              rent={37000}
            />
            <Building
              building="University of Virginia"
              address1="1826 University Ave"
              address2="Charlottesville, VA 22904"
              isAvailable={true}
              rent={37000}
            />
            <Building
              building="Baltimore Aquarium"
              address1="501 E Pratt St"
              address2="Baltimore, MD 21202"
              isAvailable={false}
              rent={37000}
            />
            <Building
              building="Statue of Liberty"
              address1="New York"
              address2="NY 10004"
              isAvailable={true}
              rent={37000}
            />
            <Building
              building="Empire State Building"
              address1="20 W 34th St"
              address2="New York, NY 10001"
              isAvailable={false}
              rent={37000}
            />
          </BuildingGrid>
        </div>
      </div>
    )
  }
}

export default Home