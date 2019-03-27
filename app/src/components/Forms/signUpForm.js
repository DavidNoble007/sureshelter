import React, { Component } from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";

class SignUpForm extends Component {
  state = {
    email: "",
    password: ""
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
    event.preventDefault();

    axios.post("/signup", this.state).then(res => {
      this.setState({
        email: "",
        password: ""
      });
      console.log("made it");
    });
  };
  render() {
    return (
      <Col className="justify-content-md-center" xs lg="6">
      <Container style={{ height: 400, padding: 10 }} className="d-Form">
        <Form>
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

export default SignUpForm;
