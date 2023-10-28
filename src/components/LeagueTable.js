import { useState } from 'react'

// THIS IS TEMPERARY DATA AS I LEARN REACT
// Will attach to api to grab data
import LeagueData from '../leagueData.json'

import '../index.css'

const LeagueTable = () => {

   
  const tableLabels = ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts']
  const [data, setData] = useState(LeagueData)

  return (
    <div>
      <ul className="leagueTable">
        <li className="leagueTableHeader">
          {tableLabels.map((label, index) => (
            <div>
              <span key={index}>{label}</span>
            </div>
          ))}
        </li>
          {data.league.map((row, rowIndex) => (
            <li className="clubInfo" key={rowIndex}>
              <div>
                <span>{row.name}</span>
              </div>
              <div>
                <span>{row.gamesPlayed}</span>
              </div>
              <div>
                <span>{row.wins}</span>
              </div>
              <div>
                <span>{row.draws}</span>
              </div>
              <div>
                <span>{row.losses}</span>
              </div>
              <div>
                <span>{row.goalsFor}</span>
              </div>
              <div>
                <span>{row.goalsAgst}</span>
              </div>
              <div>
                <span>{row.goalDiff}</span>
              </div>
              <div>
                <span>{row.points}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>

  )
}

export default LeagueTable