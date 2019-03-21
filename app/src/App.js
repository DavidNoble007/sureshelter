import React, { Component } from 'react';
import './App.css';

import CarouselBody from "./components/Carousel";



import Navbar from "./components/Nav";
import CardBody from "./components/Card";
class App extends Component {
  
  render() {
  
    return (
      <div className="App">
     
      <CarouselBody />

      <Navbar />
      <br></br>
      <CardBody />
      </div>
    );
  }
}

export default App;
