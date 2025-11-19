import React, { useEffect, useState } from "react";
import axios from 'axios';

const UsersComponent = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <h2>Loading...</h2> ;

    return (
        <div>
            <h2>Users Component</h2>
            <ul>
                {users?.map((user) => (
                    <li key = {user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default UsersComponent;