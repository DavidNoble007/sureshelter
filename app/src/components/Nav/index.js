import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
//* Excluding Button, Form & FormControl to prevent errors */
// import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
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
            <Nav.Link href="#pricing">Volunteer</Nav.Link>
          </Link>

          <Link to="/donate">
            <Nav.Link href="#pricing">Donations</Nav.Link>
          </Link>
        </Nav>
        <Nav className="mr">
        <div className="buttons">
                <Button onClick={props.signUpModal} isColor="primary">
                  <strong>Sign up</strong>
                </Button>
                <Button onClick={props.loginModal} isColor="light">
                  Log in
                </Button>
              </div>

{/*      
        <Link to="/signup">
            Sign Up
          </Link>

          <Link to="/signin">
            Login
          </Link> */}
          
          </Nav>
      </Navbar>
    </div>
  );
}

export default ButtonAppBar;
