import React, { useState } from 'react';

const EditTask = () => {
  const [taskId, setTaskId] = useState('');
  const [task, setTask] = useState(null);
  const [message, setMessage] = useState('');

  const formatDateForInput = (isoString) => {
    const date = new Date(isoString);
    return date.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:MM"
  };

  const getCurrentDateTimeLocal = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const fetchTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/tasks/${taskId}`);
      if (response.ok) {
        const data = await response.json();
        // Format due_date or set to current datetime
        data.due_date = data.due_date
          ? formatDateForInput(data.due_date)
          : getCurrentDateTimeLocal();
        setTask(data);
      } else {
        setMessage('Task not found');
      }
    } catch (error) {
      console.error('Error fetching task:', error);
      setMessage('Error fetching task');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      title: task.title,
      description: task.description,
      status: task.status,
      due_date: task.due_date ? new Date(task.due_date).toISOString() : null,
    };

    try {
      const response = await fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: updatedTask }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Task updated successfully!');
        console.log('Updated task:', data);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setMessage(`Error: ${errorData.errors?.join(', ') || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating task:', error);
      setMessage('Error updating task');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <div>
        <label>Task ID:</label>
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <button onClick={fetchTask}>Fetch Task</button>
      </div>

      {task && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              name="status"
              value={task.status}
              onChange={handleChange}
              required
            >
              <option value="">Select status</option>
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
              name="due_date"
              value={task.due_date}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update Task</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default EditTask;
