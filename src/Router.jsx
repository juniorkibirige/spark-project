import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import AdminRouter from './AdminRouter'
import useToken from './Components/useToken'
import Preferences from './Pages/Preferences/Preferences'

const Main = props => {
    const { appState, setAuth } = useToken()
    return (
        <Switch>
            <AdminRouter path='/dashboard' appState={appState} component={Home} />
            <AdminRouter path='/settings' appState={appState} component={Preferences} />
            <Route exact path='/' render={() => <Login setToken={setAuth} appState={appState} />} />
        </Switch>
    )
}

export default Main