import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardBody(props){
  const { classes } = props;
  return (
    <div className={classes}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pixabay.com/get/e832b60a2af7083ed1584d05fb1d4e97e07ee3d21cac104490f3c070afefb1bd_340.jpg0" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  );
};

export default CardBody;