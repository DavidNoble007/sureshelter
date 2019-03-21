import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Nav";
import CardBody from "./components/Card";
class App extends Component {
  render() {
  
    return (
      <div className="App">
      <Navbar />
      <br></br>
     
      </div>
    );
  }

  render(){
    return(
    
    <CardBody />
   
    );
  }

}

export default App;
