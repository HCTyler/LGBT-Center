import React from 'react';
import "./login.scss"


function SignupForm() {

    return (
        <div className='signup-form'>
            <div >
                <h1>Create Account</h1>
                <p>Let's get started with your free account!</p>

            </div>
            <form>
                <div>
                    <input
                        placeholder="First name"
                        name="username"
                        type="username"
                        id="email"
                    />
                </div>
                <div>
                    <input
                        placeholder="Last Name"
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>
                <div>
                    <input
                        placeholder="Email address"
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>
                <div>
                    <input
                        placeholder="Birthdate"
                        name="password"
                        type="password"
                        id="password"
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
                    <input
                        placeholder="Confirm password"
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>
                    <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default SignupForm;
