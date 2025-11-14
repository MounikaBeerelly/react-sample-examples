import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/userSlice";

const UserListComponent = () => {

    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if(loading) return <h3>Loading users...</h3>
    if(error) return <h3>{error}</h3>

    return (
        <div>
            <h2>User List</h2>
            {users?.map((user) => (
                <p key={user.id}>
                    <strong>{user.name}</strong>
                </p>
            ))}
        </div>
    );
} 

export default UserListComponent;