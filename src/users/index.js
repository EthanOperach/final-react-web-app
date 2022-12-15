import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "./users-thunk";
import {Link} from "react-router-dom";

const Users = () => {
    const {users, loading} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(findAllUsersThunk())
    }, [])
    console.log(users)
    const noAdmins = users.filter(user => user.role == 'USER')
    console.log(noAdmins)
    return(
        <>
            <h1>Users {noAdmins.length}</h1>
            <div className="list-group">
                {
                    noAdmins.map((user) =>
                    <Link to={`/profile/${user._id}`} key={user._id} className="list-group-item">
                        {user.username}
                    </Link>
                    )
                }
            </div>
        </>
    )
}

export default Users