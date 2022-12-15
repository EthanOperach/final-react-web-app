import {createSlice} from "@reduxjs/toolkit";
import {
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk,
    deleteUserThunk,
    updateUserThunk
} from "./users-thunk";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        currentUser: null,
        publicProfile: null
    },
    extraReducers: {
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.publicProfile = action.payload
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
            state.loading = false
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            console.log(state)
            console.log(action)
            state.currentUser = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.currentUser = null
            let deletedUser = action.payload.username
            console.log(state.users)
            console.log(deletedUser)
            state.users = state.users.filter(user => user.username != deletedUser)
            console.log(state.users)
        }

    }
})

export default usersReducer.reducer