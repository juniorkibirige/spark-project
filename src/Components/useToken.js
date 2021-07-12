import { useState } from 'react'

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('SparkStateApp')
        const appState = JSON.parse(tokenString)
        return appState;
    }

    const [appState, setAuth] = useState(getToken())


    const saveToken = (appStateRaw) => {
        sessionStorage.setItem('SparkStateApp', JSON.stringify(appStateRaw))
        setAuth(
            JSON.parse(sessionStorage.getItem('SparkStateApp'))
        )
    }

    return {
        appState,
        setAuth: saveToken
    }
}