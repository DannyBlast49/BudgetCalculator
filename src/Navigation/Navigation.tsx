import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link className="nav-button" to="/">
            <Button variant="contained">
              Calculator
            </Button>
          </Link>
        </li>
        <li>
          <Link className="nav-button" to="/Expenses">
            <Button variant="contained">
              Expenses
            </Button>
          </Link>
        </li>
        <li>
          <Link className="nav-button" to="/Savings">
            <Button variant="contained">
              Savings
            </Button>
          </Link>
        </li>
        <li>
          <Link className="nav-button" to="/Settings">
            <Button variant="contained">
              Settings
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;