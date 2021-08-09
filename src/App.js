import logo from './logo.svg';
import './App.css';

//components!
import './components/NavBar';
import { Component } from 'react';
import { render } from '@testing-library/react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          <h1>ElchickenPe</h1>
      </div>
    );
  }
}
export default App;
