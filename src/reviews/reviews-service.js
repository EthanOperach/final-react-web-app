import axios from "axios";

const REVIEW_API = 'http://localhost:4000/api/reviews'
const GAME_REVIEWS_API = 'http://localhost:4000/api/games'
const AUTHOR_REVIEWS_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true});

export const createReview = async (review) => {
    const response = await api.post(REVIEW_API, review)
    return response.data
}

export const findReviewsByGame = async (gameID) => {
    const response = await api.get(`${GAME_REVIEWS_API}/${gameID}/reviews`)
    return response.data
}

export const findReviewsByAuthor = async (author) => {
    const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`)
    return response.data
}

export const deleteReview = async (rid) => {
    const response = await axios.delete(`${REVIEW_API}/${rid}`)
    return response.data
}