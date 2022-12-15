import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findReviewsByAuthorThunk } from "./reviews-thunks";
import { Link } from "react-router-dom";
import { findReviewsByGame } from "./reviews-service";

const Reviews = () => {
    const { currentUser } = useSelector((state) => state.users)
    const { reviews } = useSelector((state) => state.reviews)
    const dispatch = useDispatch()
    /*
    useEffect(() => {
        dispatch(findReviewsByAuthorThunk(currentUser._id))
    }, [currentUser._id])
    */
    return (
        <>
            <h1>Movies</h1>
            {currentUser != null &&
                <div>
                    <h4>Welcome {currentUser.username}!</h4>
                </div>

            }
            {currentUser == null &&
                <div>
                    <h4>Welcome! Log in to see/post reviews!</h4>
                </div>}
        </>
    )
}

/*
                reviews && reviews.map((review) =>
                    <li>
                        <Link to={`/details/${review.gameID}`}>
                            {review.review}
                        </Link>
                    </li>
                )
*/

export default Reviews;