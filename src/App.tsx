import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';
import AppRouter from './AppRouter';
import Navigation from './Navigation/Navigation';
import { navList } from './Navigation/constants';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <div className="content-wrapper">
          <Navigation  navList={navList}/>
          <AppRouter />
        </div>
      </Router>
      {/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
      </div>*/}
    </>
  );
}

export default App;
