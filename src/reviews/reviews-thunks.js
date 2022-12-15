import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByGame, deleteReview} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)
export const findReviewsByGameThunk = createAsyncThunk(
    'findReviewsByGame',
    async (gameID) => findReviewsByGame(gameID)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)
export const deleteReviewThunk = createAsyncThunk(
    'deleteReview',
    async (rid) => deleteReview(rid)
)