import React, { useState } from 'react';
import '../index.css';

const CounterComponent = () => {
    const [counter, setcounter] = useState(0);

    const handleIncrement = () => {
        setcounter(counter + 1)
    }

    const handleDecrement = () => {
        setcounter(counter - 1)
    }

    const handleReset = () => {
        setcounter(0)
    }
    return (
        <div>
            <h1 style = {{ textAlign : 'center'}}>Counter Component</h1>
            <h2> Count : {counter}</h2>
            <div className="button-group">
                <button onClick={handleIncrement}>
                        Increment
                </button>
                <button 
                    onClick={handleDecrement}
                    disabled = {counter === 0}>
                        Decrement
                </button>
                <button onClick={handleReset}>
                        Reset
                </button>
            </div>
        </div>
    )
}

export default CounterComponent;