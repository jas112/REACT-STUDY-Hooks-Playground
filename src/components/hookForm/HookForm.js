import React, {useState} from 'react';

function HookForm() {

    const [email, setEmail] = useState('');

    const handleOnChange = (evt) => {
        setEmail(evt.target.value);
    }

  return (
    <div className='HookForm App-module'>
        <h1>Hook Form</h1>
        <h1>{`Email entered => ${email}`}</h1>
        <input
            type='text'
            name='email'
            value={email}
            onChange={handleOnChange}
        >
        </input>
        <button onClick={() => setEmail('')}>Submit</button>
    </div>
  )
}

export default HookForm;
