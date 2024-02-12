import { useGetStandingsQuery } from "./standings/standingsApiSlice"
import { useGetTeamsQuery } from "./teams/teamsApiSlice"
import Standing from "./standings/Standing"
import '../styles/LeagueTable.css'

const LeagueTable = () => {
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

        const table = ids?.length ? ids.map((standingId) => (
            <Standing key={standingId} standingId={standingId}/>
        )) : null

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

export default LeagueTable