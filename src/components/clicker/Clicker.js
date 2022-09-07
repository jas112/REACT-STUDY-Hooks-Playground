import React, {useState, useEffect} from 'react';

function Clicker() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count updated => ${count}`);
        document.title = `HPG Clicker Count(${count})`;
    });

  return (
    <div className='Clicker App-module'>
        <h1>Clicker</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>CLICK ME</button>
        <button onClick={() => setCount(0)}>RESET ME</button>
    </div>
  )
}

export default Clicker;
