import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <ul>
        <p>BookStore CMS</p>
        <Link key="1" to="/">Books</Link>
        &nbsp;&nbsp;&nbsp;
        <Link key="2" to="/categories">Categories</Link>
      </ul>
    </div>
  );
}

export default Navbar;
