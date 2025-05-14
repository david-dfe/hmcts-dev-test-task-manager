import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import logo from './logo.svg';
import './App.css';
import TasksPage from './components/TasksPage'; // Import the TasksPage component

function App() {
  return (
    <Router>
      <div className="App">

        <nav className="App-nav">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/tasks">View All Tasks</Link>
        </nav>

        <main className="App-main">

          {/* Define your
            Routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TasksPage />} /> {/* Route for tasks page */}
          </Routes>
        </main>

        <footer className="App-footer">
          <p>&copy; 2023 Task Management App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
