import logo from './logo.svg';
import './App.css';

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
        <br></br>
        <a
          className="App-link"
          href="/baca"
          rel="noopener noreferrer"
        >
          User Read
        </a>
        <br></br>
        <a
          className="App-link"
          href="/dashboard"
          rel="noopener noreferrer"
        >
          Dashboard Admin
        </a>
      </header>
    </div>
  );
}

export default App;
