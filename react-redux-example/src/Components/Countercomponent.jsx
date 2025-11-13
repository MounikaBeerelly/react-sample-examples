import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 30 }}>
      <h2>Redux Counter</h2>

      <h3>Value: {count}</h3>

      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
