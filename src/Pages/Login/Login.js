import React from 'react'
import {ReactComponent as Logo} from './../../Assets/instagram.svg'

const Login = () => {

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {

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