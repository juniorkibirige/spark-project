import React from 'react'
import { Redirect, Route } from 'react-router-dom'

let state_of_state = localStorage.getItem('SparkStateApp')
if(!state_of_state) {
    let StateApp = {
        isLoggedIn: false,
        user: []
    }
    localStorage.setItem('SparkStateApp', JSON.stringify(StateApp))
}

let state = localStorage.getItem('SparkStateApp')
let StateApp = JSON.parse(state)

const Auth = {
    isLoggedIn: StateApp.isLoggedIn,
    user: StateApp.user
}

const AdminRouter = ({ component: Component, path, ...rest}) => (
    // console.log(Auth)
    <Route path={path}
    {...rest}
    render={
        props => Auth.isLoggedIn
        ? (<Component {...props} appState={Auth} />)
        : (<Redirect to={{
            pathname: "/",
            state: {
                prevLocation: path,
                error: "You need to login first!"
            }
        }} />
        )
    }   
    />
)

export default AdminRouter