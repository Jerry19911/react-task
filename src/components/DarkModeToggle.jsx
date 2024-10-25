import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
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
    <div className="btn-toggle-switch">
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
  );
};

export default DarkModeToggle;
