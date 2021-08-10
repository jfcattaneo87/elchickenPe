
import React, { Component } from 'react';
import './App.css';
import './styles.css';

//components!
import './components/NavBar';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
          
      </div>
    );
  }
}
export default App;
