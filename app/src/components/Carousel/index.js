import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Map from "../Map/map"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./style.css"

function CarouselBody(props){
const { classes } = props;
const { CarouselBodySize } = props;
return (
  <div style={{backgroundColor: "#F9FB05", height:1460}}>
   
    <Row>
    <Container>
    <Col sm={12} style={{height: 110, backgroundColor: "#A08AE6", fontFamily: "Georgia, serif", fontSize: 23, marginBottom: 20, padding: 10}}>
    <h2>“If you know of someone who is homeless; or by chance you are homeless yourself; you are not alone.”― Asa Don Brown</h2></Col>
    </Container>
  </Row>
  
<Container className={classes}>
<Col>
<Carousel>
  <Carousel.Item>
    <img style={{ height: 425,}}
      className="d-block w-100"
      src="https://s3-ap-southeast-2.amazonaws.com/arc-vaada/wp-content/uploads/2019/02/21154909/12927-homelessness-is-not-what-0.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img

      className="d-block w-100"
      src="http://nightlightcanada.com/wp-content/uploads/2015/10/homeless-.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ height: 425 }}
      className="d-block w-100"
      src="https://media.npr.org/assets/img/2018/05/24/ap_17062505776035_wide-722b10839c0f48bc69b7ed6256e52513ec078d34-s800-c85.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</Col>
</Container>
<Map></Map>
</div>

);


};
export default CarouselBody;