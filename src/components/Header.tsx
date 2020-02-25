import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const App: React.FC = () => {
  return (
    <header classname="Header">
      <img src={logo} className="App-logo" />
      <Link to="/home">Home Link</Link>
      <Link to="/login">Login Link</Link>
    </header>
  );
};

export default App;
