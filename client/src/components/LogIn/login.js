import React from 'react'
import "./login.scss"
import SigninForm from './signin-form'
import SignupForm from './signup-form'
// import Link from "react-router-dom"

function Login() {
    return (
        <section className='login-container'>
            <div>
                {/* <SigninForm/> */}
                <SignupForm />
            </div>
        </section>
    )
}

export default Login