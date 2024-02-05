import React, { useEffect } from 'react';
import { useSelector } from "react-redux"
import { selectTeamsById } from "./teamsApiSlice"

const Team = ({ teamId, currentPos }) => {
    const team = useSelector(state => selectTeamsById(state, teamId))

    useEffect(() => {
      const flippers = document.querySelectorAll('.flipper')
      flippers.forEach((flipper, index) => {
        setTimeout(() => {
          flipper.classList.add('start-flip');
        }, index * 15); // Adjust the delay duration if needed
      });
    }, []);


    if (team) {
        return ( 
            <li className="clubInfo">  
              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <p id="clubInfo-currentPos">{currentPos}</p>
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
                    <p id="clubInfo-gamesPlayed">{team.gamesPlayed}</p>
                  </div>
                </div>
              </div>
          
              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-wins">{team.wins}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-draws">{team.draws}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-losses">{team.losses}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-goalsFor">{team.goalsFor}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-goalsAgst">{team.goalsAgst}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-goalDiff">{team.goalDiff}</p>
                  </div>
                </div>
              </div>

              <div className="flipper">
                <div className="front"></div>
                <div className="back">
                  <div>
                    <p id="clubInfo-points">{team.points}</p>
                  </div>
                </div>
              </div>
            </li>
        )
    } else return null
}

export default Team