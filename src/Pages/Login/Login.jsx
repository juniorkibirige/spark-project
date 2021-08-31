import React, { useEffect } from 'react'
import { useState } from 'react';
import './Login.css'
import PropTypes from 'prop-types'

import Logo from './../../Assets/drugstore.png'
import { withRouter } from 'react-router-dom';

const loginUser = async (credentials) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
        .then(json => {
            if (json.success) {
                let userData = {
                    id: json.id,
                    name: json.name ?? "",
                    email: json.email ?? "",
                    userType: json.userType ?? "",
                    token: json.token ?? ""
                }
                let appState = {
                    isLoggedIn: true,
                    user: userData
                }
                return appState
            }
        })
}

const LoginScaffolding = ({ setToken, appState}) => {
    const [auth, setAuth] = useState({ email: '', passwd: '', remember: false, auth: false })


    useEffect(() => {
        if(appState.isLoggedIn) {
            window.location.href = window.location.href + "dashboard"
            console.log(window.location)
        }
        return (() => setAuth({ email: '', passwd: '', remember: false, auth: false }))
    }, [appState.isLoggedIn])

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
            if (token.isLoggedIn) {
                await setToken(token)
                window.location.pathname = '/home'
            }

        }
    }

    return (
        <>
            <div className="container">
                <div className={"row"}>
                    <div className="div-login col-md-5 offset-md-3" style={{ backgroundColor: "whitesmoke" }}>
                        <h1 className="text-center">Spark POS Login</h1>
                        <div className={"div-login-logo mb-3"} style={{ width: "100%", textAlign: `center` }}>
                            <img src={Logo} alt="Spark POS Logo" width="50" height={"70"} />
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input className="form-control" type='email' name='email' placeholder="Email Address or Username" required onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type='password' name='passwd' placeholder="Password" required onChange={handleChange} />
                                </div>
                                <button className="btn btn-lg btn-success btn-outline-info text-white" style={{ fontWeight: 'bolder' }} onSubmit={handleSubmit}>LOG IN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

LoginScaffolding.propTypes = {
    setToken: PropTypes.func.isRequired,
    appState: PropTypes.object.isRequired,
}

export default withRouter(LoginScaffolding)