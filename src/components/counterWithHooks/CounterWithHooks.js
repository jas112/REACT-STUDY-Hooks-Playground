import React,{ useState } from "react";


function CounterWithHooks(props){
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                {`Counter Equals => ${count}`}
                <button onClick={() = }></button>
            </div>
        </div>
    );
}

export default CounterWithHooks;