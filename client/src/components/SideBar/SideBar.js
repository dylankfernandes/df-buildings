import React from 'react'

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar__header">Dylan Fernandes</h3>
      <ul className="sidebar__list">
        <p className="sidebar__list-header">Menu</p>
        <li><a href="https://google.com">About</a></li>
        <li><a href="https://google.com">Buildings Directory</a></li>
        <li><a href="https://google.com">City Directory</a></li>
        <li><a href="https://google.com">Search Buildings</a></li>
        <li><a href="https://google.com">Recommended</a></li>
      </ul>
      <ul className="sidebar__list">
        <p className="sidebar__list-header">Support</p>
        <li><a href="https://google.com">Contact</a></li>
        <li><a href="https://google.com">Service Agents</a></li>
        <li><a href="https://google.com">Upcoming</a></li>
        <li><a href="https://google.com">Reviews</a></li>
        <li><a href="https://google.com">Requests</a></li>
      </ul>
    </div>
  )
}

export default SideBar
