import React, { useState } from 'react';
import '../index.css';

const Countercomponent = () => {
    const [counter, setcounter] = useState(0);

    const handleIncrement = () => {
        setcounter(counter + 1)
    }

    const handleDecrement = () => {
        setcounter(counter - 1)
    }

    const handleReset = () => {
        setcounter(counter)
    }
    return (
        <div style = {{ textAlign : 'center'}}>
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

export default Countercomponent;