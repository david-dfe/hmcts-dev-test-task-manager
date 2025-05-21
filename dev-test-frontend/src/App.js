import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/HomePage'; // Import the Home component
import logo from './logo.svg';
import './App.css';
import TasksPage from './components/TasksPage'; // Import the TasksPage component
import NewTask from './components/NewTask';
import EditTask from './components/EditTask'; // Import the EditTask component
import DeleteTask from './components/DeleteTask'; // Import the DeleteTask component

function App() {
  return (
    <Router>
      <div className="App">

        <nav className="App-nav">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/tasks">View All Tasks</Link>
          <Link to="/tasks/new" className="ml-4">Create New Task</Link>
          <Link to="/tasks/edit" className="ml-4">Edit Task</Link>
          <Link to="/tasks/delete" className="ml-4">Delete Task</Link>
          <Link to="/tasks/Contact" className="ml-4">Contact Us</Link>
        </nav>

        <main className="App-main">

          {/* Define your
            Routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} /> {/* Route for tasks page */}
            <Route path="/tasks/new" element={<NewTask />} /> {/* Route for creating a new task */}
            <Route path="/tasks/edit" element={<EditTask />} /> {/* Route for editing a task */}
            <Route path="/tasks/delete" element={<DeleteTask />} /> {/* Route for deleting a task */}

          </Routes>
        </main>

        <footer className="App-footer">
          <p>&copy; 2025 Task Management App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
