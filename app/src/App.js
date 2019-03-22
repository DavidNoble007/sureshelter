import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CarouselBody from "./components/Carousel";
import Navbar from "./components/Nav";
import Volunteer from "./Pages/Volunteer"
import Donate from "./Pages/Donate"
function App()  {

    return (
      <Router>
      <div className="App">
        <Navbar />
        <br></br>
        {/* <CarouselBody /> */}
        <Switch>
          <Route exact path="/" component={CarouselBody} />
          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/donate" component={Donate} />
          
        </Switch>
      </div>
      </Router>
    );
  
}
export default App;
