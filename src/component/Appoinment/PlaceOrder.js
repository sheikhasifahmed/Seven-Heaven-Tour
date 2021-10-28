import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const PlaceOrder = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="mx-auto w-50">
        <h3 className="mb-5">
          Please fill up the form to apply for an appoinment
        </h3>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Patient Name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Patient Age</Form.Label>
              <Form.Control type="number" placeholder="Patient Age" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Patient Gender</Form.Label>
              <Form.Select defaultValue="">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Current Address</Form.Label>
            <Form.Control placeholder="example: 1234 Main St" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email (optional)</Form.Label>
            <Form.Control placeholder="Enter email address" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Cotact Number</Form.Label>
              <Form.Control type="number" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridService">
              <Form.Label>Select the Service</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>Dental Care</option>
                <option>Padiatric (child)</option>
                <option>Cardiac treatment</option>
                <option>Diagnosis</option>
                <option>Other</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridShift">
              <Form.Label>Choose Shift</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PlaceOrder;
