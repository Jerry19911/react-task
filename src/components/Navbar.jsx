import React from 'react';

const Navbar = () => {
  return (
<header>
      <div className="container">
        <a href="indext.html">
          <img src="images/siliconlogo1.svg" alt="Silicon Logotype" />
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>

        <a id="auth-signin" href="#" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
