import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk, updateUserThunk } from "./users-thunk";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { findReviewsByAuthor } from "../reviews/reviews-service";

const Profile = () => {
    const navigate = useNavigate()
    const { currentUser, publicProfile } = useSelector((state) => state.users)
    const { reviews } = useSelector((state) => state.reviews)
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    const handleUpdateBtn = () => {
        const update = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        dispatch(updateUserThunk(currentUser._id, update))
        // console.log(update) update is good here
        navigate("/profile")
    }
    useEffect(() => {
        // dispatch(findReviewsByAuthor(currentUser))
    }, [])
    console.log(currentUser)
    return (
        <>
            <h2>{currentUser.username}</h2>
            <input
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control"
                placeholder="First Name"
                value={firstName} />
            <p>First Name: {currentUser.firstName}</p>

            <input
                onChange={(e) => setLastName(e.target.value)}
                className="form-control"
                placeholder="Last Name"
                value={lastName} />
            <p>Last Name: {currentUser.lastName}</p>
            <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="E-Mail"
                value={email} />
            <p>Email: {currentUser.email}</p>
            <button
                className="btn btn-primary"
                onClick={handleUpdateBtn}>
                Update Personal Info
            </button>
            {
                currentUser.role == 'ADMIN' &&
                <h5 className="text-danger">Admin Account</h5>
            }
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        </>
    )
}
/*
            {
                reviews && reviews.map((review) =>
                    <li>
                        <Link to={`/details/${review.gameID}`}>
                            {review.review}
                        </Link>
                    </li>
                )
            }
*/
export default Profile