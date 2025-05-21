import React, { useState } from 'react';

const DeleteTask = () => {
  const [taskId, setTaskId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    if (!taskId) {
      setMessage('Please enter a Task ID.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      const response = await fetch(`http://localhost:3000/api/v1/tasks/${taskId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage('✅ Task deleted successfully!');
        setTaskId('');
      } else {
        const errorData = await response.json();
        setMessage(`❌ Error: ${errorData.errors?.join(', ') || 'Failed to delete task'}`);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
      setMessage('❌ Error deleting task');
    }
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <div>
        <label>Task ID:</label>
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
        <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
          Delete Task
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteTask;
