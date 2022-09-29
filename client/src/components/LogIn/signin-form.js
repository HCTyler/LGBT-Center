import React, { useState } from 'react';
import "./login.scss"
// import Auth from "../../utils/auth";

function SigninForm(props) {

  return (
    <>
      <div className='login-form'>
        <h1>Welcome back!</h1>
      </div>
      <form>
        <div>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="email"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            type="password"
            id="password"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <text>
          New to the community? Sign up!
        </text>
      </div>
    </>
  );
}

export default SigninForm;
