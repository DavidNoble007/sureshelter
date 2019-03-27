//!! Needs a badge alert to notify the user that they were successfully signed up !!//

import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";
// import { Redirect } from 'react-router'

class SignUpForm extends Component {

  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
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
    event.preventDefault()
    // ({ fireRedirect: true });
   

    axios.post("/signup", this.state).then(res => {
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repassword: "",
        fireRedirect: true
      });
    

      //if res.status == 200 && token exists
      // react router redirect
      // BONUS: set token in local storage
      //else
      //alert bad signin

      console.log("made it");
    });
  };
  render()
   {
  return (
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
              value={this.state.password}
             name
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
