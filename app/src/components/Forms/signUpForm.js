//!! Needs a badge alert to notify the user that they were successfully signed up !!//

import React, { Component } from "react";
<<<<<<< HEAD
=======
import { Redirect } from "react-router";
>>>>>>> 4c5858f4cc6afd47ddfc57e8977a0fc875be3fb9
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";

export default class SignUpForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    fireRedirect: false
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
    });
  };

  render() {
    const { fireRedirect } = this.state;

    return (
<<<<<<< HEAD
      <Col className="justify-content-md-center" xs lg="6">
      <Container style={{ height: 400, padding: 10 }} className="d-Form">
        <Form>
=======
      <Container style={{ height: 400, padding: 20 }} className="d-Form">
        <Form> <Row>
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
                placeholder="Last name" />
            </Col>
          </Row>
          <Col>
>>>>>>> 4c5858f4cc6afd47ddfc57e8977a0fc875be3fb9
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
              value={this.state.repassword}
              name="repassword"
              htmlFor="password"
            />
<<<<<<< HEAD
        <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
          Sign Up!
        </Button>
        </Form>
=======
          </Col>
        </Form>
        <form onSubmit={this.handleFormSubmit}>
          <Button variant="primary" type="submit">
            Sign Up!
          </Button>
        </form>
        {fireRedirect && <Redirect to={"/"} />}
>>>>>>> 4c5858f4cc6afd47ddfc57e8977a0fc875be3fb9
      </Container>
      </Col>
    );
  }
}
