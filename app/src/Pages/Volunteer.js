import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardBody from '../components/Card/index';
import Col from 'react-bootstrap/Col'

function Volunteer() {
  return (
    <div>
<Container>
        <Row><Col>
        <h3>Sign up</h3>
        
        </Col>
          <Col>
            <CardBody />
          </Col>
          <Col>       
           <CardBody />
          </Col>    
          </Row>

      </Container>
    </div>

  );
}

export default Volunteer;
