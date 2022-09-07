import React from 'react';
import useFormState from './hooks/useFormState';

function RefactoredHookForm() {

    const [email, updateEmail, resetEmail] = useFormState('');


  return (
    <div className='RefactoredHookForm App-module'>
        <h1>Refactored Hook Form</h1>
        <h1>{`Email entered => ${email}`}</h1>
        <input
            type='text'
            name='email'
            value={email}
            onChange={updateEmail}
        >
        </input>
        <button onClick={resetEmail}>Submit</button>
    </div>
  )
}

export default RefactoredHookForm;
