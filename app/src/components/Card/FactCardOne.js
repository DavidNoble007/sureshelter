
import React from 'react';
import { Card, Container, Row, CardDeck, Col, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./style.css";

function FactCardOne(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Container>
        <Row>
          <CardDeck>
            <Col>
              <Link className="factCard" to="/volunteer">
                <Card style={{ width: '14rem' }}>
                  <Link className="factCard" to="/volunteer">
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/06/18/23/01/wanderer-814222_1280.jpg" />
                  </Link>
                  <Card.Body>
                    <Card.Text>
                      Over half a million people are homeless.
                 </Card.Text>
                    <Link className="linkText" to="/volunteer">VOLUNTEER</Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="factCard" to="/donate">
                <Card style={{ width: '14rem' }}>
                  <Card.Img variant="top" src="https://www.washingtonpost.com/resizer/vEzxCuJswotoP3M-uUKGT0hLhHc=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EC3FMFHM4MI6PFLOXLVDLD4XEU.jpg" />
                  <Card.Body>
                    <Card.Text>
                      1/4 of homeless people are children.
                 </Card.Text>
                    <Link className="linkText" to="/donate">DONATE</Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="factCard" to="/signup">
                <Card style={{ width: '14rem' }}>
                  <Card.Img variant="top" src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                  <Card.Body>
                    <Card.Text>
                      57,000 veterans are homeless.
                 </Card.Text>
                    <Link className="linkText" to="/signup">SIGN UP</Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link className="factCard" to="/login">
                <Card style={{ width: '14rem' }}>
                  <Card.Img variant="top" src="https://static01.nyt.com/images/2016/03/02/us/02seattle-web1/02seattle-web1-superJumbo.jpg?quality=90&auto=webp" />
                  <Card.Body>
                    <Card.Text>
                      1 in 5 homeless suffer from mental illness.
                 </Card.Text>
                    <Link className="linkText" to="/login">LOGIN</Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default FactCardOne;