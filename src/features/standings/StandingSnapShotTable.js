import React from 'react';
import { useGetStandingsQuery } from "./standingsApiSlice"
import { useGetTeamsQuery } from "../teams/teamsApiSlice"
import Standing from "./Standing"
import '../../styles/LeagueTable.css'

const SnapShotTable = (teamId) => {
    const { 
        data: teams,
        isLoading: teamsLoading,
        isSuccess: teamsSuccess,
        isError: teamsError,
        error: teamsErrorData
    } = useGetTeamsQuery();

    const { 
        data: standings,
        isLoading: standingsLoading,
        isSuccess: standingsSuccess,
        isError: standingsError,
        error: standingsErrorData
    } = useGetStandingsQuery();

    let content

    if (teamsLoading || standingsLoading) content = <p>Loading...</p>

    if (teamsError || standingsError) {
        content = <p>{teamsErrorData?.message || standingsErrorData?.message}</p>;
    }

    if (teamsSuccess && standingsSuccess) {
        const { ids } = standings
        let targetTeamStanding
        for(var key in standings.entities) {
            if (standings.entities[key].teamID === teamId.teamId) {
                targetTeamStanding = standings.entities[key].position
            }
        }

        

        const table = ids?.length ? [...ids].sort((a, b) => {
            const positionA = standings.entities[a]?.position || 0;
            const positionB = standings.entities[b]?.position || 0;
            return Math.abs(positionA - targetTeamStanding) - Math.abs(positionB - targetTeamStanding);
        }).slice(0, 5)
        .sort((a, b) => {
            const positionA = standings.entities[a]?.position || 0;
            const positionB = standings.entities[b]?.position || 0;
            return positionA - positionB; // Sort by position in ascending order
        }).map((standingId) => (
            <Standing key={standingId} standingId={standingId}/>
        )) : null;

        const tableHeaders = ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts']

        content = (
            <ul className="leagueTable">
                <li className="leagueTableHeader">
                    <div></div>
                    {tableHeaders.map((label, index) => (
                        <div>
                            <p key={index}>{label}</p>
                        </div>
                    ))}
                </li>
                {table}
            </ul>
        )
    }
    
    return content
}

export default SnapShotTable