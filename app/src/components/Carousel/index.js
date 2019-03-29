import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import "./style.css"
import FactCardOne from "../Card/FactCardOne"

function CarouselBody(props) {
  const { classes } = props;
  return (
    <div style={{ height: 960, margin: -24 }}>
      <Row>
        <Col sm={12} style={{
          height: 140, fontFamily: "Georgia, serif", fontSize: 20, marginTop: -24 }}>
          <Container
            style={{ padding: 24 }}>
            <Row>
              <p><em><strong style={{fontSize: 30}}>SureShelter</strong></em>- Gathering and distributing resources to help protect and restore dignity in humanity.</p>
            </Row>
            <p><em>“If you know of someone who is homeless; or by chance you are homeless yourself; you are not alone.”― Asa Don Brown</em></p>
          </Container>
        </Col>
      </Row>
      <Container className={classes}>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img style={{ height: 425, }}
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
            <Carousel.Item>
              <img
                style={{ height: 425 }}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/c2/25/60/c22560ad6f4d1f630f8fbb16b289e81c.jpg"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Row className= "factcards">
        <FactCardOne />
        </Row>
      </Container>

  
    </div>

  );


};
export default CarouselBody;