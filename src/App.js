import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx';
import Home from './Pages/Home/Home.jsx'
import { useEffect, useState } from 'react';
import Preferences from './Pages/Preferences/Preferences.jsx';

function App() {
  const [auth, setAuth] = useState({token: ''})

  const setToken = (userToken) => {
    sessionStorage.setItem('token', userToken.token)
  }

  const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    setAuth({
      token: tokenString
    })
  }

  useEffect(() => {
    getToken();
    return ()=> setAuth({token: ''})
  }, [])

  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' render={()=> auth.token.length === 0 ? <Login setToken={setToken}/> : <Home />} />
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
