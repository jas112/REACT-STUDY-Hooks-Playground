// import useState
import { useState } from "react";

function useToggle(initValue = false){
    // declare state and setState variables...
    const [stateValue, setStateValue] = useState(initValue);
    // define function to toggle state...
    const toggle = () => {
        setStateValue(!stateValue);
    }
    // return state and function to toggle it...
    return [stateValue, toggle];
}

export default useToggle;