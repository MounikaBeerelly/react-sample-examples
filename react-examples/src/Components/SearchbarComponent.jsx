import React, { useEffect, useState } from "react";
import axios from 'axios';

const SearchBarComponent = ({todos}) => {
    const [query, setQuery] = useState("");

    const filteredData = todos?.filter(todo => 
        todo.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h2 style={{textAlign:'center'}}>Search Bar Component...</h2>
            <input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={e => setQuery(e.target.value)} 
            />
            <ul>
                {filteredData.map((todo) => (
                    <li key = {todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

const FetchTodosData = () => {
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res) => setTodos(res.data));
    }, []);

    return (
        <SearchBarComponent todos = {todos} />
    );
}

export default FetchTodosData;