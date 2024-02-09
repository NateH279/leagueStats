import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const standingsAdapter = createEntityAdapter({})

const initialState = standingsAdapter.getInitialState()

export const standingsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getStandings: builder.query({
            query: () => '/standings',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5, // Very short, Default is 60s
            transformResponse: responseData => {
                const loadedStandings = responseData.map(standing => {
                    standing.id = standing._id
                    return standing
                })
                return standingsAdapter.setAll(initialState, loadedStandings)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        {type: 'Standing', id: 'LIST'}, result.ids.map(id => ({type: 'Standing', id}))
                    ]
                } else {
                    return [{ type: 'Standing', id: 'LIST'}]
                }
            }
        })
    })
})

export const { useGetStandingsQuery } = standingsApiSlice

// Selectors
export const selectStandingsResult = standingsApiSlice.endpoints.getStandings.select()

const selectStandingsData = createSelector(
    selectStandingsResult,
    standingsResult => standingsResult.data
)

export const {
    selectAll: selectAllStandings,
    selectById: selectStandingsById,
    selectIds: selectStandingIds
} = standingsAdapter.getSelectors(state => selectStandingsData(state) ?? initialState)

