import React from 'react';

const Header = () => {
  return (
    <header className="headerSection">
      <div className="left">
        <h2 className="title">Shopping Mall</h2>
      </div>

      <nav className="center">
        <ul>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Children</a></li>
          <li><a href="#">Beauty</a></li>
        </ul>
      </nav>

      <div className="search">
        <input
          type="text"
          placeholder="Search for products..."
          aria-label="Search"
        />
      </div>

      <div className="right">
        <button className="signin">Sign In / Sign Up</button>
        <button className="cart">Cart</button>
      </div>
    </header>
  );
};

export default Header;
