import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const teamsAdapter = createEntityAdapter({})

const initialState = teamsAdapter.getInitialState()

export const teamsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTeams: builder.query({
            query: () => '/teams',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5, // Very short, Default is 60s
            transformResponse: responseData => {
                const loadedTeams = responseData.map(team => {
                    team.id = team._id
                    return team
                })
                return teamsAdapter.setAll(initialState, loadedTeams)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        {type: 'Team', id: 'LIST'}, result.ids.map(id => ({type: 'Team', id}))
                    ]
                } else {
                    return [{ type: 'Team', id: 'LIST'}]
                }
            }
        })
    })
})

export const { useGetTeamsQuery } = teamsApiSlice

// Selectors
export const selectTeamsResult = teamsApiSlice.endpoints.getTeams.select()

const selectTeamsData = createSelector(
    selectTeamsResult,
    teamsResult => teamsResult.data
)

export const {
    selectAll: selectAllTeams,
    selectById: selectTeamsById,
    selectIds: selectTeamIds
} = teamsAdapter.getSelectors(state => selectTeamsData(state) ?? initialState)

