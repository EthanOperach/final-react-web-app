import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findGameBySearchTermThunk } from "./shark-thunks";
import { Link } from "react-router-dom";

const SharkSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const { games, loading } = useSelector((state) => state.shark)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findGameBySearchTermThunk(searchTerm))
    }, [])
    return (
        <>
            <h1>Game Search</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findGameBySearchTermThunk(searchTerm))
                            console.log(games)
                        }}>Search
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm} />
                </li>
                {
                    games && games.map((game) =>
                        <Link to={`/details/${game.gameID}`} key={game.gameID} className="list-group-item">
                            {game.external}
                        </Link>
                    )
                }
            </ul>
        </>
    )
}

export default SharkSearch