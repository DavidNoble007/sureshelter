import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">SureShelter</Navbar.Brand>
        <Nav className="mr-auto">
        <Link to="/">
          <Nav.Link href="#pricing">Home</Nav.Link>
        </Link>

        <Link to="/volunteer">
          <Nav.Link href="#pricing">Volunteer</Nav.Link>
        </Link>

        <Link to="/donate">
          <Nav.Link href="#pricing">Donations</Nav.Link>
        </Link>
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