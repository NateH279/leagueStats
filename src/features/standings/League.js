import React from 'react'
import LeagueTable from '../LeagueTable'
import '../../styles/League.css'

const League = () => {
  return (
    <div className="league">
        <div className="table-title">
            <h1>
                Premier League 2022/2023 Season
            </h1>
        </div>
        <div className='table-container'>
          <LeagueTable />
        </div>
    </div>
  )
}

export default League