import React from 'react';
import logo from '../../logo.svg'; // Import the logo image
import '../../App.css'; // Import the CSS file for styling
const AppHeader = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default AppHeader;
