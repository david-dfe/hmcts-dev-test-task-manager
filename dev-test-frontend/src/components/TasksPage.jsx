import React from 'react';
import TaskList from './ListAllTasks'; // Make sure to import the TaskList component
import AppHeader from './partials/AppHeader';

const TasksPage = () => {
  return (

    <div>
      <AppHeader /> {/* Use the AppHeader component */}
      <h2>All Tasks</h2>
      <TaskList /> {/* Display the TaskList component here */}
    </div>
  );
};

export default TasksPage;
// This component serves as a page to display all tasks.
