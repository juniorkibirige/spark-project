import './App.css';
import { Switch, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
// import { useEffect, useState } from 'react';

function App() {
  // const [auth, setAuth] = useState({email: '', passwd: '', remember: false, auth: false})

  // useEffect(() => {
  //   if (!auth.auth)
  //     setAuth(false)
  //   return
  // }, [auth])
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Login} />
        </Switch>
      </div>
    </>
  );
}

export default App;
