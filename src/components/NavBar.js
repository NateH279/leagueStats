import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <header>
      <div className="navBar">
        
        <div className="navBar-title-containter">
          <Link to="/">
            <h1 className="navBar-title">leagueStats</h1>
          </Link>
        </div>
        
        <nav className="directory">
          <Link to="/leagues">
            <div className="navLink">
              <h3>Leagues</h3>
            </div>
          </Link>
          
          <Link to="/teams">
            <div className="navLink">
              <h3>Teams</h3>
            </div>
          </Link>
          
          <Link to="/players">
            <div className="navLink">
              <h3>Players</h3>
            </div>
          </Link>
          
        </nav>
      </div>
    </header>
  )
}

export default NavBar