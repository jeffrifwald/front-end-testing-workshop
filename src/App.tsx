import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={HomePage} exact path="/home" />
          <Route component={LoginPage} exact path="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
