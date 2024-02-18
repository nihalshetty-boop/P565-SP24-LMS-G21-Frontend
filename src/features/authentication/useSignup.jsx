import React from 'react';
import { Link } from 'react-router-dom';

export function useSignup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
}

export default useSignup;
