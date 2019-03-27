//!! Needs a badge alert to notify the user that they were successfully signed up !!//

import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";
// import { Redirect } from 'react-router'

export default class SignUpForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  handleInputChange = e => {
    // Getting the value and name of the input which triggered the change
    let value = e.target.value;
    const name = e.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    axios.post("/signup", this.state).then(res => {
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repassword: "",
        fireRedirect: true
      });
      console.log("made it");
    });
  };
  render() {
    const { fireRedirect } = this.state;
    return (
<<<<<<< HEAD
      <Container style={{ height: 400, padding: 20 }} className="d-Form">
        <Form>
          {" "}
          <Row>
            <Col>
              <Form.Control
                value={this.state.firstname}
                name="firstname"
                onChange={this.handleInputChange}
                type="text"
                placeholder="First name"
              />
            </Col>
            <Col>
              <Form.Control
                value={this.state.lastname}
                name="lastname"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last name"
              />
            </Col>
          </Row>
          <Col>
=======
      <Col className="justify-content-md-center" xs lg="6">
      <Container style={{ height: 400, padding: 10 }} className="d-Form">
        <Form>
>>>>>>> 9417e000aa2d4a199e4ea16837e697fc063c1fe8
            <Form.Group controlId="formGroupEmail">
              <Form.Label />
              <Form.Control
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
              />
            </Form.Group>
            <Form.Control
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              htmlFor="password"
            />
          <br></br>
            <Form.Control
              placeholder="Password x2"
              onChange={this.handleInputChange}
              value={this.state.password}
              name
            />
        <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
          Sign Up!
        </Button>
        </Form>
      </Container>
      </Col>
    );
  }
}
