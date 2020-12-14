import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper blue lighten-1 px1">
      <NavLink to="/" className="brand-logo">React + TypeScript</NavLink>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">List</NavLink></li>
        <li><NavLink to="/about">Info</NavLink></li>
      </ul>
    </div>
  </nav>
);
