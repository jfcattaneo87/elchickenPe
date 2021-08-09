import logo from './logo.svg';
import './App.css';

//components!
import './components/NavBar';
import { Component } from 'react';
import { render } from '@testing-library/react';


class App extends Component
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>ElchickenPe</h1>
    )
  }

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
      </header>
    </div>
  );
}

export default App;
