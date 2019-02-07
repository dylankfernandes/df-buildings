import React from 'react'
import Building from '../Building'

const BuildingGrid = ({ data }) => {
  return (
    <div className="buildinggrid">
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
    </div>
  )
}

export default BuildingGrid
