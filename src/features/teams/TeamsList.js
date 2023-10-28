import { useGetTeamsQuery } from "./teamsApiSlice"
import Team from './Team'

const TeamsList = () => {
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

        const table = ids?.length ? ids.map((teamId) => (
            <Team key={teamId} teamId={teamId} />
        )) : null
        
        
        // Needs to add additional sort rules for when there are conflicts
        table.sort((teamA, teamB) => {
            return teams.entities[teamB.key].points - teams.entities[teamA.key].points
        })

        // Need to figure out how to sort the incoming data
        const tableHeaders = ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts']

        content = (
            <ul className="leagueTable">
                <li className="leagueTableHeader">
                    {tableHeaders.map((label, index) => (
                        <div>
                            <span key={index}>{label}</span>
                        </div>
                    ))}
                </li>
                {table}
            </ul>
        )
    }
    
    return content
}

export default TeamsList