import React from 'react';
import { Card, Button } from 'react-bootstrap';

function DonateCard(props){
  const { classes } = props;
  return (
    <div className={classes}>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="btm" src="
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkrRHtD9DXSYi-PkhBHxjW00FIBGg4VfTvXwNYs7Oo84KKZJqyw" />
 
    <Card.Text>
    Volunteers are needed year-round. Because many of us think of giving back during the Fall and Winter holidays, many volunteer programs are quite busy during this time. Think about committing to volunteer once a month all year, or ask your favorite local organization when they might really need the help.
    </Card.Text>
  
</Card>
</div>
  );
};

export default DonateCard;