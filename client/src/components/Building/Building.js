import React from 'react'

const Building = ({ building, address1, address2, isAvailable, rent }) => {
  return (
    <div className="building">
      <div className="building__image" >
        <img src={`https://source.unsplash.com/random?300x300?search=${building}`} alt="" />
      </div>
      <div className="building__content">
        <h3 className="building__header">{building}</h3>
        <p className="building__address">{address1}</p>
        <p className="building__address">{address2}</p>
        <div className="building__footer">
          <p className={`building__availability ${isAvailable ? 'building__available' : 'building__unavailable'}`}>{
            isAvailable ? "For Rent" : "Unavailable"
          }</p>
          <p className="building__rent">{
            isAvailable ? '$' + rent : null
          }</p>
        </div>
      </div>
    </div >
  )
}

export default Building
