import './App.css';
import { Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    if (!auth)
      setAuth(false)
    return
  }, [auth])
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' render={() => <h1>Home</h1>} />
          <Route exact path='/exp' render={() => <h1>Exp</h1>} />
        </Switch>
      </div>
    </>
  );
}

export default App;
