import React, { Component } from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
import "./style.css";
import axios from "axios";
// import { Redirect } from 'react-router'

class SignUpForm extends Component {

  state = {
    email: "",
    password: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({

      [name]: value
      
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault()
    // ({ fireRedirect: true });
   

    axios.post("/signup", this.state).then(res => {
      this.setState({
        email: "",
        password: ""
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
        <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
          Sign Up!
        </Button>
      </Container>

    );
  }
}

export default SignUpForm;
