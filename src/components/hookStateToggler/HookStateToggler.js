import React, {useState} from 'react'

function HookStateToggler() {

    const [isHappy, setIsHappy] = useState(true);

    const toggle = () => {
        setIsHappy(!isHappy);
    };

  return (
    <div>
        <h1 onClick={toggle}>{isHappy? '😁' : '😟'}</h1>
        <button onClick={toggle}>Increment Count</button>
    </div>
  )
}

export default HookStateToggler;