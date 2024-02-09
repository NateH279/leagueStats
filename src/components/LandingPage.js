import React from 'react'
import '../styles/LandingPage.css'

const Home = () => {
  return (
    <div className="landing">
        <div className='landing-title'>
          <h1>
            Welcome to leagueStats!
          </h1>
          <h2>
            Home of Football Stats
          </h2>
        </div>

        <div className="leaguesButton">
          <div>
            <h2>
              Explore Leagues
            </h2>
          </div>
        </div>
    </div>
  )
}

export default Home