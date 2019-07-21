import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <img src="/images/sun_icon.png" alt="Logo" className="header__logo" />

    <nav className="navbar">
      <Link className="navbar__link" to="/dashboard">
        Home
      </Link>
      <NavLink to="/car-comparator" className="navbar__link" exact={true}>
        Car Comparator
      </NavLink>
    </nav>
  </header>
);
export default Header;
