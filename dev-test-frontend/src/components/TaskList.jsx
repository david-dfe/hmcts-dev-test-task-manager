import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/tasks')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch tasks');
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Task List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 rounded shadow-sm">
            <strong>{task.title}</strong> — {task.status}
            <br />
            <span className="text-sm text-gray-500">{new Date(task.due_date).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
// This component fetches tasks from the API and displays them in a list.
