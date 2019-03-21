import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

function ButtonAppBar(props) {
  const { classes } = props;
  return (
   <div className={classes}>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">SureShelter</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Voulenteer</Nav.Link>
      <Nav.Link href="#pricing">Donate</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
   </div>
    
  );
}


export default ButtonAppBar;