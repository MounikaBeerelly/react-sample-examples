import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/countSlice"; 

const CountComponent = () => {
    const count = useSelector((state) => state.count.value);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Count Component</h2>
            <h3>Value: {count}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default CountComponent;