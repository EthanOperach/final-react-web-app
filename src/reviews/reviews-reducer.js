import { createSlice } from "@reduxjs/toolkit";
import { createReviewThunk, findReviewsByAuthorThunk, findReviewsByGameThunk, deleteReviewThunk } from "./reviews-thunks";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewsByGameThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.reviews = state.reviews.filter(r => {
                return r._id !== action.payload
            })
        }
    }
})

export default reviewsReducer.reducer