import { useSelector } from "react-redux"
import { selectTeamsById } from "./teamsApiSlice"

const Team = ({ teamId }) => {
    const team = useSelector(state => selectTeamsById(state, teamId))

    if (team) {
        return ( 
            <li className="clubInfo">
              <div>
                <span id="clubInfo-name">{team.teamName}</span>
              </div>
              <div>
                <span id="clubInfo-gamesPlayed">{team.gamesPlayed}</span>
              </div>
              <div>
                <span id="clubInfo-wins">{team.wins}</span>
              </div>
              <div>
                <span id="clubInfo-draws">{team.draws}</span>
              </div>
              <div>
                <span id="clubInfo-losses">{team.losses}</span>
              </div>
              <div>
                <span id="clubInfo-goalsFor">{team.goalsFor}</span>
              </div>
              <div>
                <span id="clubInfo-goalsAgst">{team.goalsAgst}</span>
              </div>
              <div>
                <span id="clubInfo-goalDiff">{team.goalDiff}</span>
              </div>
              <div>
                <span id="clubInfo-points">{team.points}</span>
              </div>
            </li>
        )
    } else return null
}

export default Team