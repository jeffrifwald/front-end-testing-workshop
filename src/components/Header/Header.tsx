import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header classname="Header">
      <img src={logo} className="Header__logo" />
      <Link to="/home">Home Link</Link>
      <Link to="/login">Login Link</Link>
    </header>
  );
};
