import React from 'react';
import useFormState from './hooks/useFormState';

function RefactoredHookForm() {

    const [email, updateEmail, resetEmail] = useFormState('');
    const [password, updatePassword, resetPassword] = useFormState('');

  return (
    <div className='RefactoredHookForm App-module'>
        <h1>Refactored Hook Form</h1>
        <h1>{`Email > ${email} | Password > ${password}`}</h1>
        <div>
          <input
              type='text'
              name='email'
              value={email}
              onChange={updateEmail}
          >
          </input>
          <button onClick={resetEmail}>Reset Email</button>
        </div>
        <div>
          <input
              type='password'
              name='password'
              value={password}
              onChange={updatePassword}
          >
          </input>
          <button onClick={resetPassword}>Reset Password</button>
        </div>

    </div>
  )
}

export default RefactoredHookForm;
