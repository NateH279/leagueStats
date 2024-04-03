import React from 'react'
import { useGetTeamsQuery } from "./teamsApiSlice"
import Team from './TeamCard'
import { Link } from 'react-router-dom'
import '../../styles/TeamList.css'

const TeamList = () => {
    const { 
        data: teams,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeamsQuery();

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p>{error?.message}</p>;
    }

    if (isSuccess) {
        const { ids } = teams

        const sortedTeams = ids?.length ? ids.map((teamId) => teams.entities[teamId]).sort((teamA, teamB) => {
            const nameA = teamA.teamName;
            const nameB = teamB.teamName;
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        }) : null

        const table = ids?.length ? sortedTeams.map((team) => (
            <Link to={team.id}>
                <Team key={team.id} teamId={team.id} />
            </Link>
        )) : null

        content = (
            <div className="teamList-container">
                <div className="team-grid-container">
                    {table}
                </div>
            </div>
        )
    }

    return content
}

export default TeamList