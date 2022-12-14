import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "./users-thunk";
import { Navigate } from "react-router";

const Register = () => {
    const { currentUser } = useSelector((state) => state.users)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const handleRegisterBtn = () => {
        dispatch(registerThunk({ username, password, firstName, lastName, email }))
    }

    if (currentUser) {
        return (<Navigate to={'/profile'} />)
    }

    return (
        <>
            <h1>Register</h1>
            <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="username"
                value={username} />
            <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="password"
                type="password"
                value={password} />
            <input
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="firstName"
                type="firstName"
                value={firstName} />
            <input
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="lastName"
                type="lastName"
                value={lastName} />
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="email"
                type="email"
                value={email} />
            <button
                className="btn btn-primary w-100"
                onClick={handleRegisterBtn}>
                Register
            </button>
            {
                currentUser &&
                <h1>Welcome new user: {currentUser.username}</h1>
            }
        </>
    )
}
export default Register