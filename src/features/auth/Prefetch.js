import { store } from '../../app/store'
import { teamsApiSlice } from '../teams/teamsApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const teams = store.dispatch(teamsApiSlice.endpoints.getTeams.initiate())

        return () => {
            console.log('unsubscribing')
            teams.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch