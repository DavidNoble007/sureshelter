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
      <Navbar bg="dark" variant="dark"><img
        src="https://i.ibb.co/7nm1t6j/d8ca65c3-d6f7-453c-ae19-eda013271331.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        <Navbar.Brand href="">SURESHELTER</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>

          <Link to="/volunteer">
            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
          </Link>

          <Link to="/donate">
            <Nav.Link href="/donate">Donations</Nav.Link>
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