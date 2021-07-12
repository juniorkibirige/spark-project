import React, { useEffect } from 'react'
import { useState } from 'react';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import PropTypes from 'prop-types'

import Logo from './../../Assets/drugstore.png'

const loginUser = async (credentials) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}


const Login = ({setToken}) => {
    const [auth, setAuth] = useState({ email: '', passwd: '', remember: false, auth: false })

    useEffect(() => {
        return (() => setAuth({ email: '', passwd: '', remember: false, auth: false }))
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setAuth(prevAuth => ({
            ...prevAuth,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(auth)
        if (auth.email.length > 0 && auth.passwd.length > 0) {
            const token = await loginUser(auth);
            setToken(token)
        }
    }

    return (
        <>
            <div className="container">
                <div className={"row mt-5"}>
                    <div className="div-login col-md-6 offset-md-3" style={{height: "70%"}}>
                    <h1 className="text-center">Spark POS Login</h1>
                    <div className={"div-login-logo mb-3"} style={{width: "100%", textAlign: `center`}}>
                        <img src={Logo} alt="Spark POS Logo" width="50" height={"70"} />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input type='email' name='email' placeholder="Email Address or Username" required onChange={handleChange} />
                            <input type='password' name='passwd' placeholder="Password" required onChange={handleChange} />
                            <button onSubmit={handleSubmit}>Log In</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
}

export default Login;