import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Button, Form, Col } from "react-bootstrap";
import "./style.css";
import axios from "axios";

export default class LoginForm extends Component {
  state = {
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
        email: "",
        password: "",
        fireRedirect: true
      });
    });
  };

  render() {
    const { fireRedirect } = this.state;

    return (
      <Container style={{ height: 400, padding: 20 }} className="d-Form">
        <Form>
          <Col>
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
          </Col>
          <Col>
            <Form.Control
              placeholder="Password"
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              htmlFor="password"
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Password x2"
              onChange={this.handleInputChange}
              value={this.state.repassword}
              name="repassword"
              htmlFor="password"
            />
          </Col>
        </Form>
        <form onSubmit={this.handleFormSubmit}>
          <Button variant="primary" type="submit">
            Sign Up!
          </Button>
        </form>
        {fireRedirect && <Redirect to={"/"} />}
      </Container>
    );
  }
}
