// ContactUs.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/custom.css';
import officeImage from './Images/3.jpg'; // Import your office image
import Dash1 from './Dashboard';
// Import your contact image

const ContactUs = () => {
  return (
    <>
    <Dash1/>
    <Container className="contact-container">
      <Row>
        <Col md={6} className="contact-form">
          <h2>Contact Us</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="contact-info">
            <h2>Our Office</h2>
            <img src={officeImage} alt="Office" className="office-image" />
            <p>123 Task Manager St</p>
            <p>City, Country</p>
            <p>Email: info@taskmanager.com</p>
            <p>Phone: +1 234 567 8901</p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ContactUs;
