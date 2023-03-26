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
          <div key={link.label || "undefined-link"}>
            <NavLink className="nav-button" to={link.path}>
              <li>{link.label}</li>
            </NavLink>
          </div>
        ))
      }
    </ul>
  </div>
);

export default Navigation;