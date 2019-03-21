import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Nav";
import CarouselBody from "./components/Card";
class App extends Component {
  
  render() {
  
    return (
      <div className="App">
       <CarouselBody />
       <Navbar />
      <br></br>
      </div>
    );
  }
}
export default App;
