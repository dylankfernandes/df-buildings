import React, { Component } from 'react'
import CityCard from '../CityCard'

class CityGrid extends Component {

  displayCities() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading Cities...</div>
    } else {
      return data.cities.map(city => {
        return <li key={city.id} onClick={e => {
          this.setState({
            selected: city.id
          })
        }}>{city.name}</li>
      })
    }
  }

  render() {
    return (
      <div className="citygrid">
        <CityCard city="New York" />
        <CityCard city="Paris" />
        <CityCard city="New Amsterdam" />
        <CityCard city="Colorado" />
      </div>
    )
  }
}

export default CityGrid
