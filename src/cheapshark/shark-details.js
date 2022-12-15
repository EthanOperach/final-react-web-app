import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findGameByIDThunk } from "./shark-thunks";
import { createReviewThunk, findReviewsByGameThunk, deleteReviewThunk } from "../reviews/reviews-thunks";
import { Link } from "react-router-dom";

const SharkDetails = () => {
    const { gameID } = useParams()
    const [review, setReview] = useState('')
    const { reviews } = useSelector((state) => state.reviews)
    const { details } = useSelector((state) => state.shark)
    const { currentUser } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findGameByIDThunk(gameID))
        dispatch(findReviewsByGameThunk(gameID))
    }, [])
    const handlePostReviewBtn = () => {
        dispatch(createReviewThunk({
            review,
            gameID
        }))
    }
    const handleDeleteBtn = (rid) => {
        dispatch(deleteReviewThunk(rid))
    }
    return (
        <>
            <h1>{details.title}</h1>
            <div className="row">
                <div className="col">
                    <img src={details.thumb} />
                </div>
            </div>
            {
                currentUser && !currentUser.banned &&
                <div>
                    <textarea
                        onChange={(e) => setReview(e.target.value)}
                        className="form-control"></textarea>
                    <button onClick={handlePostReviewBtn}>Post Review</button>
                </div>
            }
            {
                currentUser && currentUser.banned &&
                <h3 className="text-danger">You have been banned.</h3>
            }
            <ul className="list-group">
                {
                    reviews.map((review) =>
                        <li className="list-group-item">
                            {review.review}
                            <Link to={`/profile/${review.author._id}`} className="float-end">
                                {review.author.username}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </>
    )
}
/*
                            <button onClick={handleDeleteBtn(review._id)}
                                className="btn btn-danger float-end">
                                Delete
                            </button>
*/

export default SharkDetails