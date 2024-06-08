import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/" className="header-link">
          <h1>The Meal</h1>
        </Link>
      </header>
    </div>
  );
};
