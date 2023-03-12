import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationLink } from './types';
import './Navigation.scss';

interface navigationProps {
  navList: NavigationLink[];
}

const Navigation = (props: navigationProps) => (
  <div className="navigation">
    <ul>
      { 
        props.navList.map((link) => (
          <NavLink className="nav-button" to={link.path}>
            <li>{link.label}</li>
          </NavLink>
        ))
      }
    </ul>
  </div>
);

export default Navigation;