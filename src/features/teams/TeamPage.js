import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import { selectTeamsById } from './teamsApiSlice';
import '../../styles/TeamPage.css'

const TeamPage = () => {
  let { teamId } = useParams();
  let content
  
  const team = useSelector(state=> selectTeamsById(state, teamId))
  if (!team) {
    content = <p>Loading...</p>
  }
  else {
    content = (
      <div>
        
        <div className="team-banner">
          <img className="team-banner-image" src={team.logoURL} alt={team.teamName} />
          <h2>{team.teamName}</h2>
        </div>
  
        <div className="teamView">
          <div className="teamView-child">
            Player List
          </div>

          <div className="teamView-child">
            Team POS
          </div>
        </div>
      </div>
    );
  }
  return content
};

export default TeamPage;