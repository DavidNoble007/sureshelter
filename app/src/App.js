import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CarouselBody from "./components/Carousel";
import Navbar from "./components/Nav";
import Volunteer from "./Pages/Volunteer";
import Donate from "./Pages/Donate";
import SignUp from "./Pages/signup";
import Login from "./Pages/login";

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
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          
        </Switch>
      </div>
      </Router>
    );
  
}
export default App;
