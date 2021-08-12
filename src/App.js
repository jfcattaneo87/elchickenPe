
import React, { Component } from 'react';
import './App.css';
import { CartWidget } from './components/cartWidget/CartWidget';


//components!
import './components/NavBar';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    return (
      <div className="App">
         
        <NavBar />  <CartWidget />
      </div>
    );
  }
}
export default App;
