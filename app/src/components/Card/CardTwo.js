import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardBodyTwo(props){
  const { classes } = props;
  return (
    <div className={classes}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="
https://thumbs.dreamstime.com/t/happy-volunteer-group-pointing-towards-camera-19391358.jpghttps://dummyimage.com/300/fff/aaahttps://pixabay.com/get/e832b60a2af7083ed1584d05fb1d4e97e07ee3d21cac104490f3c070afefb1bd_340.jpg0" />
  <Card.Body>
    <Card.Text>
    Volunteers are needed year-round. Because many of us think of giving back during the Fall and Winter holidays, many volunteer programs are quite busy during this time. Think about committing to volunteer once a month all year, or ask your favorite local organization when they might really need the help.
    </Card.Text>
  </Card.Body>
</Card>
</div>
  );
};

export default CardBodyTwo;