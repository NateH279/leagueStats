import React from 'react'
import '../styles/Welcome.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Welcome = () => {

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const onGoLeaguesClicked = () => navigate('/leagues')

  let goLeaguesButton = null

  if (pathname !== '/leagues') {
    goLeaguesButton = (
      <button
        title='Leagues'
        onClick={onGoLeaguesClicked}
      />
    )
  }

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
            <Link to="/leagues">
              <h2>Explore Leagues</h2>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Welcome