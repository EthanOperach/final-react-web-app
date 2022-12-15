import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk, logoutThunk, loginThunk, updateUserThunk } from "./users-thunk";
import { findReviewsByAuthor } from "../reviews/reviews-service";
import { deleteReviewThunk, findReviewsByAuthorThunk } from "../reviews/reviews-thunks";
import { Link } from "react-router-dom";

const PublicProfile = () => {
    const { uid } = useParams()
    const { currentUser, publicProfile } = useSelector((state) => state.users)
    const { reviews } = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    const handleBanBtn = () => {
        dispatch(updateUserThunk(uid, { banned: true }))
    }
    useEffect(() => {
        dispatch(findUserByIdThunk(uid))
        dispatch(findReviewsByAuthorThunk(uid))
    }, [uid])
    console.log(publicProfile)
    return (
        <>
            {currentUser == 'ADMIN' &&
                <button
                    onClick={handleBanBtn}
                    className="btn btn-danger float-end">
                    Ban
                </button>
            }
            <h1>{publicProfile && publicProfile.username}</h1>
            
            {
                currentUser == 'ADMIN' &&
                <div>
                    <p className="text-warning">{publicProfile.firstName} {publicProfile.lastName}</p>
                    <p className="text-warning">{publicProfile.email}</p></div>
            }
            <h4>Reviews:</h4>
            <ul>
                {
                    reviews && reviews.map((review) =>
                        <li>
                            <Link to={`/details/${review.gameID}`}>
                                {review.review}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default PublicProfile

// {publicProfile.banned && <p className="text-danger">This user is banned!</p>}