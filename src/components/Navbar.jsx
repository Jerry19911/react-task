import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');

    } else {
      document.body.classList.remove('dark-mode');

    }
  }, [darkMode]);

  return (
    <header>
      <div className="container">
        <a href="index.html">
          <img src="images/Siliconlogotop.svg" alt="Silicon Logotype" />          
        </a>

        <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Silicon</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark Mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input 
              id="darkmode-switch" 
              type="checkbox" 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
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
