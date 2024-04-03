
import { useSelector } from "react-redux"
import { selectTeamsById } from "./teamsApiSlice"
import '../../styles/TeamCard.css'

const Team = ({ teamId }) => {
  const team = useSelector(state=> selectTeamsById(state, teamId))
  if (team) {
    return (
      <div className="team-container">
        <div className="team-logo-container">
            <img className="team-logo" src={team.logoURL} alt="teamLogo" />
        </div>
        <div className="team-name-container">
          <h2>
            {team.teamName}
          </h2>
        </div>
      </div>
    )
  } else return null
}

export default Team