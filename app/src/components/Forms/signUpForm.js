//!! Needs a badge alert to notify the user that they were successfully signed up !!//

import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";

export default class SignUpForm extends Component {
  state = {
    firstName: "",
    lastName: "",
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
        firstName: "",
        lastName: "",
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
     
      <Col className="justify-content-md-center" xs lg="12">
        <Container style={{ height: 300, padding: 30,}} className="d-Form">
          <Form>
         
            <Row>
              <Col>
                <Form.Control
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
              </Col>
              <Col>
                <Form.Control
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
              </Col>
            </Row>
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
              htmlFor="password" type="password"
            />
            <br />
            <Form.Control
              placeholder="Password x2"
              onChange={this.handleInputChange}
              value={this.state.repassword}
<<<<<<< HEAD
              name="repassword"
=======
              name="repassword" type="password"
>>>>>>> 64541b740129a405e288b55829d54efec8169b47
            />
            <Button
              variant="primary"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Sign Up!
            </Button>
          </Form>
          {fireRedirect && <Redirect to={"/"} />}
        </Container>
      </Col>
    );
  }
}
