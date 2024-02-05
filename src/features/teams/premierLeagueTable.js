import { useGetTeamsQuery } from "./teamsApiSlice"
import Team from './Team'

const PremierLeagueTable = () => {
    const { 
        data: teams,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTeamsQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p>{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = teams

        const sortedIds = [...ids]

        sortedIds.sort((teamA, teamB) => {
            return (teams.entities[teamB]?.points || 0) - (teams.entities[teamA]?.points || 0)
        })

        const table = sortedIds?.length ? sortedIds.map((teamId, index) => (
            <Team key={teamId} teamId={teamId} currentPos={index + 1}/>
        )) : null
        
        
        // Needs to add additional sort rules for when there are conflicts
        table.sort((teamA, teamB) => {
            return teams.entities[teamB.key].points - teams.entities[teamA.key].points
        })

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

export default PremierLeagueTable