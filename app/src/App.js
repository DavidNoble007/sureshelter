import React, { Component } from 'react';
import './App.css';
import AppBar from "./components/Nav";
import AutoPlaySwipeableViews from "./components/Carousel";


class App extends Component {
  
  render() {
  
    return (
      <div className="App">
      <AppBar />
       
      </div>
    );
  }

  render() {
  
    return (
      <div className="App">
      <AutoPlaySwipeableViews />
       
      </div>
    );
  }
  
}

export default App;
