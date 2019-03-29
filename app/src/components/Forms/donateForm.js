import React, { Component } from "react";
import { Container, Button, Form, Col, Row, Modal } from "react-bootstrap";
import "./style.css"
import axios from 'axios';


// import donations from "../../../../models/donation"

class DonateForm extends Component {
  // Setting the component's initial state
  state = {
    firstname: "",
    lastname: "",
    email: "",
    donationType: "",
    donationAmount: "",
  };
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
    console.log("running")
  }

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

    axios.post("/create-donations", this.state)
      .then((res) => {

        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          donationType: "",
          donationAmount: "",
        })
        this.handleShow(true)
        console.log("made it")
      })
      .finally(() => {

      })
  };

  render() {

    return (

      <Container style={{ height: 400, padding: 20 }} className="d-Form">
        <Form>
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
                placeholder="Last name" />
            </Col>
          </Row>
          <Form.Group controlId="formGroupEmail">
            <Form.Label></Form.Label>
            <Form.Control value={this.state.email}
              onChange={this.handleInputChange}
              type="email"
              name="email"
              placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              value={this.state.donationType} name="donationType"
              as="textarea"
              rows="3"
              onChange={this.handleInputChange}
              placeholder="Enter Donations" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control
              value={this.state.donationAmount} name="donationAmount"
              as="textarea"
              rows="3"
              onChange={this.handleInputChange}
              placeholder="Enter Donation Quantity" />
          </Form.Group>
        </Form>
        <Modal show={this.state.show} >
          <Button variant="primary" onClick={this.handleClose}>
            Thank you for your Donations!!
            </Button>
        </Modal>
        <Button onClick={e => this.handleFormSubmit(e)} variant="primary" type="submit">
          Submit
        </Button>
        {/* <Button onClick={this.handleShow} variant="primary" type="submit">
          Submit
        </Button> */}
        {/* <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal> */}

      </Container>



    );
  };
};
export default DonateForm;