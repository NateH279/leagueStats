import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="navBar-title">
          <h1>
              leagueStats
          </h1>
        </div>
        <div className="directory">
          <div>
            <h3>
                Leagues
            </h3>
          </div>
          <div>
            <h3>
                Teams
            </h3>
          </div>
          <div>
            <h3>
                Players
            </h3>
          </div>
        </div>
    </div>
  )
}

export default NavBar