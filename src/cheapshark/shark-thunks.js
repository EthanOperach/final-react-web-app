import {createAsyncThunk} from "@reduxjs/toolkit";
import {findGameBySearchTerm, findGameByID} from "./shark-service";

export const findGameBySearchTermThunk = createAsyncThunk(
    'findGameBySearchTerm',
    (term) => findGameBySearchTerm(term)
)

export const findGameByIDThunk = createAsyncThunk(
    'findGameByID',
    (gameID) => findGameByID(gameID)
)