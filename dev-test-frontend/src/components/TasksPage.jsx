import React from 'react';
import TaskList from './TaskList'; // Make sure to import the TaskList component

const TasksPage = () => {
  return (
    <div>
      <h2>All Tasks</h2>
      <TaskList /> {/* Display the TaskList component here */}
    </div>
  );
};

export default TasksPage;
// This component serves as a page to display all tasks.
