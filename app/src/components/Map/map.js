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
            results.forEach(function (obj) {
              var pushPin = {
                location: obj.geocodePoints[0].coordinates,
                option: { color: "blue" }
              };

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

    const { value } = event.target;

    this.setState({
      zipcode: value
    });
  };
  componentDidMount() { }

  render() {
    return (
      <div>
        <p id="MapHeader">Find a Shelter</p>
        <input
          type="text"
          name="zipcodesearch"
          onChange={e => this.handleInputChange(e)}

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
        <table align="center">
          <tbody>
            {this.state.tableDataResults.map(shelterInfo => {
              var shelterWeb = shelterInfo.website
              return (
                <tr className="tablestuff">
                  <td> {shelterInfo.shelterName} </td>
                  <td> {shelterInfo.phone} </td>
                  <td>  |-|  {shelterInfo.address} </td>
                  <td > <a href={shelterWeb} target={shelterWeb}> {shelterWeb} </a> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Map;
