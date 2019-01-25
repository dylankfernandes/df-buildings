import React from 'react'

const Update = () => {
  return (
    <div className="update">
      <img alt="Want to update?" src={require('../../assets/images/dark-city-image-background.jpg')} />
      <div className="update__overlay">
        <div className="update__text">
          <h3>Interested in Updating?</h3>
          <p>Find out more about our exclusive premium program</p>
          <p>
            <a href="https://google.com">Learn More</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Update
