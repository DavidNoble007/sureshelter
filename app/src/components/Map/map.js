import React, { Component, useState } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./style.css";
import axios from "axios";

class Map extends Component {
 state = {
  pushPins: [],
  center: [],
  zipcode: ""
 };
 handleFormSubmit = () => {
  console.log(this.state.zipcode);
  // console.log(this.zipcode);
  axios
   .get(
    "https://dev.virtualearth.net/REST/v1/Locations/" +
     this.state.zipcode +
     "?&key=AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"
   )
   .then(coordres => {
    console.log(
     coordres.data.resourceSets[0].resources[0].geocodePoints[0]
      .coordinates
    );
    
    this.setState({
     center:
      coordres.data.resourceSets[0].resources[0].geocodePoints[0]
       .coordinates
    });
    
    var coordinates =
     coordres.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[0]
      .toString()
      .slice(0, 10) +
     "," +
     coordres.data.resourceSets[0].resources[0].geocodePoints[0].coordinates[1]
      .toString()
      .slice(0, 10);
    // add axios for lat long using zip
    console.log(coordinates,"hello");
    
    axios
     .get(
      "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=HomelessShelter&userLocation=" +
       coordinates +
       ",160000&key=AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"
     )
     .then(res => {
      console.log(res);
      
      var results = res.data.resourceSets[0].resources;
      var resultsArray = [];
      results.forEach(function(obj) {
       var pushPin = {
        location: obj.geocodePoints[0].coordinates,
        option: { color: "blue" }
       };
       resultsArray.push(pushPin);
      });
      
      this.setState({ pushPins: resultsArray });
     });
   })
   .catch(e => console.log(e));
 };
 
 componentDidMount() {}
 
 handleInputChange = event => {
  // Getting the value and name of the input which triggered the change
  const { zipcode, value } = event.target;
  
  // Updating the input's state
  this.setState({
   zipcode: value
  });
 };
 
 render() {
  return (
   <div>
    <ReactBingmaps
     className="searchmap"
     bingmapKey="AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"
     pushPins={this.state.pushPins}
     center={this.state.center}
    />
    <br />
    <input
     type="text"
     name="zipcodesearch"
     onChange={e => this.handleInputChange(e)}
     //  value={this.state.zipcode}
    />
    <br />
    <button onClick={() => this.handleFormSubmit()}>
     Search by Zip Code
    </button>
    {/* everything else: table, etc. */}
   </div>
  );
 }
}

export default Map;