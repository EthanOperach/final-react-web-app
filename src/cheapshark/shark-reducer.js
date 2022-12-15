import {createSlice} from "@reduxjs/toolkit";
import {findGameBySearchTermThunk, findGameByIDThunk} from "./shark-thunks";

const initialState = {
    games: [],
    loading: false,
    details: {},
}

const sharkReducer = createSlice({
    name: 'shark',
    initialState,
    extraReducers: {
        [findGameBySearchTermThunk.fulfilled]: (state, action) => {
            state.games = action.payload
            console.log(state.games)
        },
        [findGameByIDThunk.fulfilled]: (state, action) => {
            state.details = action.payload.info
            console.log(state.details)
        }
    }
})

export default sharkReducer.reducer