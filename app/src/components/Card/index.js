import React from 'react';
import { Card } from 'react-bootstrap';

function CardBody(props){
  const { classes } = props;
  return (
    <div className={classes}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="
https://www.ihlaw.com/wp-content/uploads/2015/11/photodune-11163812-kitchen-serving-food-in-homeless-shelter-s.jpg" />
  <Card.Body>
    <Card.Text>
    Volunteers are needed year-round. Because many of us think of giving back during the Fall and Winter holidays, many volunteer programs are quite busy during this time. Think about committing to volunteer once a month all year, or ask your favorite local organization when they might really need the help.
    </Card.Text>
  </Card.Body>
</Card>
</div>
  );
};

export default CardBody;