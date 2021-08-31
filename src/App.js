import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Main from './Router'
require('./bootstrap');

function App() {

  return (
    <>
      <BrowserRouter>
        <Route component={Main} />
      </BrowserRouter>
    </>
  );
}

export default App;
