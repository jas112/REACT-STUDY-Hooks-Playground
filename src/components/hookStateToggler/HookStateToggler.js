import React, {useState} from 'react';
import useToggle from './hooks/useToggle';

function HookStateToggler() {

    // const [isHappy, setIsHappy] = useState(true);
    // const [isHeartBroken, setIsHeartBroken] = useState(false);

    // const toggleIsHappy = () => {
    //     setIsHappy(!isHappy);
    // };

    
    // const toggleIsHeartBroken = () => {
    //     setIsHeartBroken(!isHeartBroken);
    // };

    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
    const [isHuman, toggleIsHuman] = useToggle(true);

  return (
    <div>
        <h1>State Toggler</h1>
        <h2>is happy?...</h2>
        <h1 onClick={toggleIsHappy}>{isHappy? '😁' : '😟'}</h1>
        <button onClick={toggleIsHappy}>Are you happy?</button>
        <h2>is heart broken?...</h2>
        <h1 onClick={toggleIsHeartBroken}>{isHeartBroken? '💔' : '❤'}</h1>
        <button onClick={toggleIsHeartBroken}>Are you heart broken?</button>
        <h2>is human?...</h2>
        <h1 onClick={toggleIsHuman}>{isHuman? '😀' : '🤖'}</h1>
        <button onClick={toggleIsHuman}>Are you human?</button>
    </div>
  )
}

export default HookStateToggler;