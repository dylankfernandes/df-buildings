import React, { Component } from 'react'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar/NavBar';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <SideBar />
        <NavBar />
      </div>
    )
  }
}

export default Home