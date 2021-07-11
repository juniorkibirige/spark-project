import React from 'react'
import { useState } from 'react';
import {ReactComponent as Logo} from './../../Assets/instagram.svg'

const Login = () => {
    const [auth, setAuth] = useState({email: '', passwd: '', remember: false, auth: false})

    const handleChange = (e) => {
        const {name, value} = e.target
        setAuth({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(auth.email.length > 0 && auth.passwd.length > 0) {
            setAuth({
                auth: true
            })
        }
    }

    return (
        <>
            <div>
                <div>
                    <Logo />
                </div>
                <div>
                    <form onSubmit = {handleSubmit}>
                        <input type='email' name='email' placeholder="Email Address or Username" required onChange={handleChange} />
                        <input type='password' name='passwd' placeholder="Password" required onChange={handleChange} />
                        <button onSubmit={handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;