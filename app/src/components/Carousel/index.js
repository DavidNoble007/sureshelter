import React from "react";
import { Carousel, Container } from "react-bootstrap";


function CarouselBody(props){
const { classes } = props;
return (
  <div>
<Container className={classes}>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s3-ap-southeast-2.amazonaws.com/arc-vaada/wp-content/uploads/2019/02/21154909/12927-homelessness-is-not-what-0.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://nightlightcanada.com/wp-content/uploads/2015/10/homeless-.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://olympiawa.gov/~/media/Images/CPD/Homelessness/homelessness-header.jpg?la=en"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>
<Map></Map>
</div>

);


};
export default CarouselBody;