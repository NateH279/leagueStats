import React, { useEffect } from 'react';
import { useSelector } from "react-redux"
import { selectTeamsById } from "../teams/teamsApiSlice"
import { selectStandingsById } from "./standingsApiSlice"

const Standing = ({ standingId }) => {
  const standing = useSelector(state => selectStandingsById(state, standingId))
  const team = useSelector(state=> selectTeamsById(state, standing.teamID))

  useEffect(() => {
    const flippers = document.querySelectorAll('.flipper')
    flippers.forEach((flipper, index) => {
      setTimeout(() => {
        flipper.classList.add('start-flip');
      }, index * 15); // Adjust the delay duration if needed
    });
  }, []);


  if (standing) {
      return ( 
          <li className="clubInfo">  
            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <p id="clubInfo-currentPos">{standing.position}</p>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <p id="clubInfo-name">{team.teamName}</p>
              </div>
            </div>
            
            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-gamesPlayed">{standing.matchesPlayed}</p>
                </div>
              </div>
            </div>
        
            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-wins">{standing.wins}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-draws">{standing.draws}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-losses">{standing.losses}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-goalsFor">{standing.goalsFor}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-goalsAgst">{standing.goalsAgst}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-goalDiff">{standing.goalDiff}</p>
                </div>
              </div>
            </div>

            <div className="flipper">
              <div className="front"></div>
              <div className="back">
                <div>
                  <p id="clubInfo-points">{standing.points}</p>
                </div>
              </div>
            </div>
          </li>
      )
  } else return null
}

export default Standing