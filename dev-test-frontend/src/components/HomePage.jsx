import React from 'react';
import logo from '../logo.svg'; // Import the logo image
import AppHeader from './partials/AppHeader';

const HomePage = () => {
  return (
      <div>
          <AppHeader /> {/* Use the AppHeader component */}
          <h1> Welcome to the Task Management Application</h1>
    </div>
  );
};

export default HomePage;
// This component serves as a page to display all tasks.
