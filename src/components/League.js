import React from 'react'
import PremierLeagueTable from '../features/LeagueTable'
import '../styles/League.css'

const League = () => {
  return (
    <div className="league">
        <div className="table-title">
            <h1>
                Premier League 2022/2023 Season
            </h1>
        </div>
       <PremierLeagueTable />
    </div>
  )
}

export default League