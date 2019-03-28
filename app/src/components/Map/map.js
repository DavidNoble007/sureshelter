import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./style.css";
import axios from "axios";

class Map extends Component {
  state = {
    pushPins: [],
    center: [],
    tableDataResults: [],
    zipcode: []
  };

  handleFormSubmit = () => {
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
        console.log("COORDINATES:" + coordinates);

        axios
          .get(
            "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=HomelessShelter&userLocation=" +
              coordinates +
              ",16000&key=AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"
          )
          .then(res => {
            console.log(res);

            var results = res.data.resourceSets[0].resources;
            var resultsArray = [];
            var tableDataArray = [];
            results.forEach(function(obj) {
              var pushPin = {
                location: obj.geocodePoints[0].coordinates,
                option: { color: "blue" }
              };
              //address etc.
              var tableDataObject = {
                shelterName: obj.name,
                address: obj.Address.formattedAddress,
                phone: obj.PhoneNumber,
                website: obj.Website
              };
              resultsArray.push(pushPin);
              tableDataArray.push(tableDataObject);
            });

            this.setState({
              pushPins: resultsArray,
              tableDataResults: tableDataArray
            });
          });
      })
      .catch(e => console.log(e));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { zipcode, value } = event.target;

    // Updating the input's state
    this.setState({
      zipcode: value
    });
  };
  componentDidMount() {}

  render() {
    return (
      <div>
        <input
          type="text"
          name="zipcodesearch"
          onChange={e => this.handleInputChange(e)}
          //   value={this.state.zipcode}
        />

        <button onClick={() => this.handleFormSubmit()}>
          Search by Zip Code
        </button>

        <ReactBingmaps
          className="searchmap"
          bingmapKey="AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"
          pushPins={this.state.pushPins}
          center={this.state.center}
        />
        <br />
        <table>
          <tbody>
            {/* <tr className="tablestuff">
                            <td>Shelter</td>
                            <td>Phone</td>
                            <td>Address</td>
                            <td>Website</td>
                            <br></br><br></br>
                        </tr> */}
            {this.state.tableDataResults.map(shelterInfo => {
              return (
                <tr className="tablestuff">
                  <td> {shelterInfo.shelterName} </td>
                  <td> {shelterInfo.phone} </td>
                  <td> {shelterInfo.address} </td>
                  <td> {shelterInfo.website} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* everything else: table, etc. */}
      </div>
    );
  }
}

export default Map;
