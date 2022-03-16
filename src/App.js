/*import logo from './logo.svg';
import './App.css';*/
import React from'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
          <Routes>/*只匹配一个*/
              <Route path='/login' component={Login}></Route>
              <Route path='/admin' component={Admin}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
