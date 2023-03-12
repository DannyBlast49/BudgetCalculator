import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Calculator</Link>
        </li>
        <li>
          <Link to="/Expenses">Expenses</Link>
        </li>
        <li>
          <Link to="/Savings">Savings</Link>
        </li>
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;