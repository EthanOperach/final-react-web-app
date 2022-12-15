import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import SharkSearch from "./cheapshark/shark-search";
import Reviews from "./reviews";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import Users from "./users";
import usersReducer from "./users/users-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import Profile from "./users/profile";
import ProtectedRoute from "./users/protected-route";
import SharkDetails from "./cheapshark/shark-details";
import reviewsReducer from "./reviews/reviews-reducer";
import PublicProfile from "./users/public-profile";
import sharkReducer from "./cheapshark/shark-reducer";

const store = configureStore({
    reducer: {
        shark: sharkReducer,
        users: usersReducer,
        reviews: reviewsReducer,
    }
})

function App() {
    return (
        <div className="container mt-4 mb-4">
            <Provider store={store}>
                <BrowserRouter>
                    <CurrentUser>
                        <h1 className="title">Game Journal</h1>
                        <Navigation />
                        <Routes>
                            <Route index element={<Reviews />} />
                            <Route path="/search" element={<SharkSearch />} />
                                <Route path="/users" element={
                                    <ProtectedRoute>
                                        <Users />
                                    </ProtectedRoute>
                                } />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <Profile />
                                </ProtectedRoute>
                            } />
                            <Route path="/details/:gameID" element={<SharkDetails />} />
                            <Route path="/profile/:uid" element={<PublicProfile />} />
                        </Routes>
                    </CurrentUser>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
