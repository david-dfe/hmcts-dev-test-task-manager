import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 className="text-2xl font-bold mb-4">Task Management App</h1>
      </header>
      <main className="App-main">
        <TaskList />
      </main>
      <footer className="App-footer">
        <p>© 2025 Task Management App</p>
      </footer>
    </div>
  );
}

export default App;
