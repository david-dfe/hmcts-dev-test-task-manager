import React from 'react';
import TaskList from './TaskList'; // Make sure to import the TaskList component
import logo from '../logo.svg'; // Import the logo image

const TasksPage = () => {
  return (
    <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-2xl font-bold mb-4">Task Management App</h1>
        </header>
    </div>
  );
};

export default TasksPage;
// This component serves as a page to display all tasks.

