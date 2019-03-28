import React, { Component } from "react";
// import { Redirect } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    repassword: ""
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

    console.log("clicky");

    axios.post("/signin", this.state).then(res => {
      
      console.log(res);
      
      if (res.status === 200) {
      } else {
        alert("TRY AGAIN");
        console.log("WRONG PASSWORD");
      }
  
    });
  };

  render() {
   

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
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <Button variant="primary" type="submit">
            Login!
          </Button>
        </form>
      </Container>
    );
  }
}

console.log("login successful");
