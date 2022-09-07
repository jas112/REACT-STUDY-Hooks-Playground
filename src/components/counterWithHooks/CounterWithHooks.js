import React,{ useState } from "react";


function CounterWithHooks(props){
    const [count, setCount] = useState(0);

    return (
        <div className="CounterWithHooks App-module">
            <h1>{`Counter Equals => ${count}`}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
    );
}

export default CounterWithHooks;