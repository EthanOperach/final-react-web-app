import axios from "axios";

const SEARCH_URL = 'https://www.cheapshark.com/api/1.0/games?title='
const LOOKUP_URL = 'https://www.cheapshark.com/api/1.0/games?id='

export const findGameBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data
}

export const findGameByID = async (gameID) => {
    const response = await axios.get(`${LOOKUP_URL}${gameID}`)
    return response.data
}