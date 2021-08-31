import { useState } from 'react'

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('SparkStateApp')
        const appState = JSON.parse(tokenString)
        return appState ?? {};
    }

    const [appState, setAuth] = useState(getToken())


    const saveToken = (appStateRaw) => {
        localStorage.setItem('SparkStateApp', JSON.stringify(appStateRaw))
        setAuth(
            JSON.parse(localStorage.getItem('SparkStateApp'))
        )
    }

    return {
        appState,
        setAuth: saveToken
    }
}