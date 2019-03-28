import React from 'react';
import { Card, Container, Row, CardDeck, Col } from 'react-bootstrap';

function FactCardOne(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Container>
        <Row>
          <CardDeck>
            <Col>
              <Card bg="dark" text="white" style={{ width: '14rem' }}>
              <Card.Header>Fact #1<span class="glyphicon glyphicon-ok"></span></Card.Header>
                <Card.Text>
                Over half a million people are homeless.
      </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: '14rem' }}>
              <Card.Header>Fact #2</Card.Header>
                <Card.Text>
                One quarter of homeless people are children.
      </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: '14rem' }}>
              <Card.Header>Fact #3</Card.Header>
                <Card.Text>
                Over 57,000 veterans are homeless every night.
      </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card bg="dark" text="white" style={{ width: '14rem' }}>
            <Card.Header>Fact #4</Card.Header>
                <Card.Text>
                1 in 5 homeless people suffers from mental illness.
      </Card.Text>
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default FactCardOne;



