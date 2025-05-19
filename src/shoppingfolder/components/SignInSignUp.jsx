import React, { useState } from 'react';

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button
          onClick={() => setIsSignIn(true)}
          className={isSignIn ? 'active' : ''}
        >
          Sign In
        </button>
        <button
          onClick={() => setIsSignIn(false)}
          className={!isSignIn ? 'active' : ''}
        >
          Sign Up
        </button>
      </div>

      {isSignIn ? (
        <form className="auth-form">
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      ) : (
        <form className="auth-form">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default SignInSignUp;
