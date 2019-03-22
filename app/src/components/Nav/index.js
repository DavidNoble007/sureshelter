import React from "react";
import { Navbar, Nav} from "react-bootstrap";
//* Excluding Button, Form & FormControl to prevent errors */
// import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">SureShelter</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>

          <Link to="/volunteer">
            <Nav.Link href="#pricing">Volunteer</Nav.Link>
          </Link>

          <Link to="/donate">
            <Nav.Link href="#pricing">Donations</Nav.Link>
          </Link>
        </Nav>

        <Nav className="mr">
        <Link to="/sign-up">
            Sign Up
          </Link>

          <Link to="/login">
            Login
          </Link></Nav>
      </Navbar>
    </div>
  );
}

export default ButtonAppBar;
