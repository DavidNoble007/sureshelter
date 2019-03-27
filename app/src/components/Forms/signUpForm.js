import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import "./style.css";
import axios from "axios";
// import { Redirect } from 'react-router'

<<<<<<< HEAD
class SignUpForm extends Component {

=======
export default class SignUpForm extends Component {
>>>>>>> 654d0ebdcf9805b93dbd35e102bf81e431d75701
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
<<<<<<< HEAD
=======
    repassword: "",
    fireRedirect: false
>>>>>>> 654d0ebdcf9805b93dbd35e102bf81e431d75701
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
<<<<<<< HEAD
    event.preventDefault()
    // ({ fireRedirect: true });
   
=======
    e.preventDefault();
>>>>>>> 654d0ebdcf9805b93dbd35e102bf81e431d75701

    axios.post("/signup", this.state).then(res => {
      this.setState({
        email: "",
        password: "",
        fireRedirect: true
      });
<<<<<<< HEAD
    

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
=======
    });
  };

  render() {
    const { fireRedirect } = this.state;

    return (
>>>>>>> 654d0ebdcf9805b93dbd35e102bf81e431d75701
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
<<<<<<< HEAD
              value={this.state.password}
             name
=======
              value={this.state.repassword}
              name="repassword"
              htmlFor="password"
>>>>>>> 654d0ebdcf9805b93dbd35e102bf81e431d75701
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
