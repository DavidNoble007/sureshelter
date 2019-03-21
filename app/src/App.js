import React, { Component } from 'react';
import './App.css';
import AppBar from "./components/Nav";
import CardBody from "./components/Card";
class App extends Component {
  render() {
  
    return (
      <div className="App">
      <AppBar />
      <br></br>
      <CardBody />
      </div>
    );
  }

}

export default App;
