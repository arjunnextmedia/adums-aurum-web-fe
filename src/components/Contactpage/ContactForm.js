import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
const ContactForm = () => {
     const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        investmentInterest: "",
        message: "",
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
    
        toast.success(
          "Message sent successfully! Our expert will contact you within 24 hours.",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
    
        setIsSubmitting(false);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          investmentInterest: "",
          message: "",
        });
      };
    
      const investmentOptions = [
        "Gold Bars Investment",
        "Gold Coins Collection",
        "Gold ETF & Funds",
        "Portfolio Diversification",
        "Wealth Preservation",
        "Retirement Planning",
      ];
  return (
    <>
          <Col lg={8} md={6}>
              <Fade right>
                <Card className="form-card h-100">
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <h3 className="text-gold fw-bold">
                        Begin Your Gold Journey
                      </h3>
                      {/* <p className="text-light">
                        Complete the form below and our expert will contact you within 24 hours
                      </p> */}
                    </div>

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="text-light fw-semibold">
                              Full Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="fullName"
                              placeholder="Your full name"
                              value={formData.fullName}
                              onChange={handleChange}
                              required
                              className="custom-form-control"
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="text-light fw-semibold">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phoneNumber"
                              placeholder="+44 20 1 234 5678"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              className="custom-form-control"
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="text-light fw-semibold">
                              Email Address
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Your email address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="custom-form-control"
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="text-light fw-semibold">
                              Investment Interest
                            </Form.Label>
                            <Form.Select
                              name="investmentInterest"
                              value={formData.investmentInterest}
                              onChange={handleChange}
                              className="custom-form-control"
                            >
                              <option value="">
                                Select Investment Interest
                              </option>
                              {investmentOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-4">
                        <Form.Label className="text-light fw-semibold">
                          Tell us about your investment goals and any questions
                          you have...
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          placeholder="Share your investment goals and questions..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="custom-form-control"
                        />
                      </Form.Group>

                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className="submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" />
                              Sending Message...
                            </>
                          ) : (
                            "Send Secure Message"
                          )}
                        </Button>

                        {/* <div className="security-badge d-flex align-items-center">
                          <span className="shield-icon me-2">🔒</span>
                          <small className="text-light">256-bit SSL Encrypted</small>
                        </div> */}
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
    </>
  )
}

export default ContactForm
