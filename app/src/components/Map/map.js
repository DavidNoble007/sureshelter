import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";
import "./style.css";
import axios from "axios";

var zipcode = 85048;
class Map extends Component {

    handleFormSubmit = () => {
        axios.get("https://dev.virtualearth.net/REST/v1/LocalSearch/?query=homelessshelter=" + zipcode + "&key=AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8")
            .then(res => {

                // add axios for lat long using zip
                console.log(res)

            }).catch(e => console.log(e))
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <ReactBingmaps className="searchmap" bingmapKey="AgEpN8zxdQ1tj8_Zhq8IcNhyvSaEaFdyZ3lEudP0YNMla8W1Q0I9KnXaGdlLAXE8"></ReactBingmaps>
                <br></br>
                <input type="text" name="zipcodesearch"></input><br></br>
                <button onClick={() => this.handleFormSubmit()}>Search by Zip Code</button>
                {/* everything else: table, etc. */}
            </div>
        )
    }
};

export default Map;