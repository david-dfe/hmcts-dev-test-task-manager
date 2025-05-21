import React, { useState } from 'react';

const NewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      status,
      due_date: dueDate ? new Date(dueDate).toISOString() : null,
    };
    console.log( status);
      try {
      const response = await fetch('http://localhost:3000/api/v1/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: newTask }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Task created successfully!');
        console.log('Created task:', data);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setMessage(`Error: ${errorData.errors?.join(', ') || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error creating task:', error);
      setMessage('Error creating task');
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="" disabled>Select status</option>
            <option value="backlog">Backlog</option>
            <option value="ready_to_start">Ready to Start</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewTask;
