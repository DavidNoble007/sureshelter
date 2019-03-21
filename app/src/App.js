import React, { Component } from 'react';
import './App.css';
// import AppBar from "./components/Nav";
import CarouselBody from "./components/Carousel";



class App extends Component {
  
  render() {
  
    return (
      <div className="App">
      {/* <AppBar /> */}
      <CarouselBody />

      </div>
    );
  }
}

export default App;
