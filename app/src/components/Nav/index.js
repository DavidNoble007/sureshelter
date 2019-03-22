import React from "react";
import { Navbar, Nav} from "react-bootstrap";
//* Excluding Button, Form & FormControl to prevent errors */
// import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes}>
<<<<<<< HEAD
      <Navbar bg="dark" variant="dark"><img
        src="https://i.ibb.co/7nm1t6j/d8ca65c3-d6f7-453c-ae19-eda013271331.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        <Navbar.Brand href="">SURESHELTER</Navbar.Brand>
=======
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">SureShelter</Navbar.Brand>
>>>>>>> 0e34f541c3398b1313264f6c1da647eb3be08d5f
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>

          <Link to="/volunteer">
<<<<<<< HEAD
            <Nav.Link href="/volunteer">Volunteer</Nav.Link>
          </Link>

          <Link to="/donate">
            <Nav.Link href="/donate">Donations</Nav.Link>
=======
            <Nav.Link href="#pricing">Volunteer</Nav.Link>
          </Link>

          <Link to="/donate">
            <Nav.Link href="#pricing">Donations</Nav.Link>
>>>>>>> 0e34f541c3398b1313264f6c1da647eb3be08d5f
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
