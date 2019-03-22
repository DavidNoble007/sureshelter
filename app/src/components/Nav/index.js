import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/Form";
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
            <Button onClick={props.signUpModal}>Sign Up</Button>
          </Link>

          <Link to="/login">
            <Button onClick={props.loginModal}>Login</Button>
          </Link></Nav>
      </Navbar>
    </div>
  );
}

export default ButtonAppBar;
