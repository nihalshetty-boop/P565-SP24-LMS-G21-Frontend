import React from 'react';
import { Link } from 'react-router-dom';

export function useLogin() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
}

export default useLogin;
