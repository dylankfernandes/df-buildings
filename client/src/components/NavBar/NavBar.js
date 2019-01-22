import React from 'react'
import { FaCog } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h3 className="navbar__header">Dashboard</h3>
        <a className="navbar__settings" href="https://google.com"><FaCog /></a>
        <input className="navbar__search" type="text" placeholder="Search Buildings..." />
      </div>
    </nav>
  )
}

export default NavBar
