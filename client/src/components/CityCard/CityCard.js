import React from 'react'

const CityCard = ({ city, image }) => {
  return (
    <div className="citycard">
      <div className="citycard__image">
        <img src="https://source.unsplash.com/random?300x300?search=New York" alt="" />
      </div>
      <div className="citycard__content">
        <p>{city}</p>
      </div>
    </div>
  )
}

export default CityCard
