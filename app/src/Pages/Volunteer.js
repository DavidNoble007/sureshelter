import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardBody from '../components/Card/index';
import Col from 'react-bootstrap/Col'
import CardBodyTwo from "../components/Card/CardTwo";
import { Jumbotron } from "react-bootstrap";
import Map from "../components/Map/map"
function Volunteer() {
  return (
    <div style={{backgroundColor: "#3BFBFF", height:960, backgroundImage: "url(" +
    "https://forrecovery.org/wp-content/uploads/2016/06/GiveFFR.jpg"+
    ")", marginTop: -25, padding: 20}}>
<Container>
<Jumbotron style={{backgroundImage: "url(" +
    "http://uwde.org/wp-content/uploads/2016/11/Give-Advocate-Volunteer-Image-e1504722866983.png" +
    ")"}}>
 
</Jumbotron>
</Container>
<Map></Map>
</div>   
  );
}

export default Volunteer;
