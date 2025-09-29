import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import imgIcon from '../../images/icon/favicon-adam.png';

const ContactPage = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    investmentInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Map Modal State
  const [showMapModal, setShowMapModal] = useState(false);

  // Updated Google Maps Embed URLs with the new link
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4132972329216!2d55.3477924!3d25.272916499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cf1ff168621%3A0xfa85934bffa14d07!2sAl%20Rostamani%20Building%20(Al%20Qiyada%20Building)%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1759142733888!5m2!1sen!2sin`;

  const fullScreenEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.4132972329216!2d55.3477924!3d25.272916499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cf1ff168621%3A0xfa85934bffa14d07!2sAl%20Rostamani%20Building%20(Al%20Qiyada%20Building)%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1759142733888!5m2!1sen!2sin`;

  // Updated Company Location Data with correct coordinates from the new map link
  const companyLocation = {
    lat: 25.272916499999997,
    lng: 55.3477924,
    address: "Al Rostamani Building (Al Qiyada Building), Dubai, UAE",
    phone: "+971 4 297 9110",
    email: "info@adamsaurum.com",
    hours: "Mon-Fri: 9AM-6PM",
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=25.272916499999997,55.3477924`
  };

  const investmentOptions = [
    "Gold Bars Investment",
    "Gold Coins Collection", 
    "Gold ETF & Funds",
    "Portfolio Diversification",
    "Wealth Preservation",
    "Retirement Planning",
  ];

  // Form Handlers
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

  // Action Handlers
  const handleGetDirections = () => {
    window.open(companyLocation.googleMapsUrl, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${companyLocation.phone}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${companyLocation.email}`, '_blank');
  };

  const handleViewLarger = () => {
    setShowMapModal(true);
  };

  return (
    <div className="contact-page">
      <ToastContainer />

      {/* Map Section */}
      <section className="map-section py-5">
        <Container>
          <Fade bottom>
            <Row>
              <Col lg={12}>
                <div className="section-header text-center mb-5 mt-5">
                  <h2 className="display-5 fw-bold text-gold mb-3">
                    Visit Our Office
                  </h2>
                  <div className="divider-line mx-auto mb-4"></div>
                  <p className="lead" style={{color:'#666666'}}>
                    Located in the prestigious Al Rostamani Building (Al Qiyada Building) in Dubai, 
                    our office provides convenient access for all your gold investment needs.
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>

          <Row className="g-4">
            {/* Location Details Panel */}
            <Col lg={4}>
              <Fade left>
                <Card className="location-details-panel">
                  <Card.Body className="p-0">
                    {/* Quick Info */}
                    <div className="quick-info-section">
                      <div className="info-item">
                        <div className="info-icon phone-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="info-details">
                          <strong>Phone</strong>
                          <p className="gap-2">
                            <a href={`tel:+97142979110`} target="_blank" rel="noopener noreferrer" className="phone-link">
                             +971 4 297 9110 
                            </a> ( Landline )<br/>
                            <a href={`tel:+971569427727`} target="_blank" rel="noopener noreferrer" className="phone-link">
                            +971 56 942 7727
                            </a><br/>
                            <a href={`tel:+971569535775`} target="_blank" rel="noopener noreferrer" className="phone-link">
                         +971 56 953 5775
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon address-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="info-details">
                          <strong>Address</strong>
                          <p>
                            Al Rostamani Building<br/>
                            (Al Qiyada Building)<br/>
                            Dubai, UAE
                          </p>
                        </div>
                      </div>

                      <div className="info-item">
                        <div className="info-icon time-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="info-details">
                          <strong>Hours</strong>
                          <p>
                            <span className="status-open">Open</span> • Closes 6:00 PM
                          </p>
                          <small className="text-muted">{companyLocation.hours}</small>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons-section">
                      <div className="primary-actions">
                        <Button onClick={handleGetDirections} className="directions-btn">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="me-2">
                            <path d="m3 11 18-9v18l-18-9z" fill="currentColor"/>
                          </svg>
                          Directions
                        </Button>
                        
                        <Button onClick={handleCall} className="call-btn">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="me-2">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                          </svg>
                          Call
                        </Button>
                      </div>

                      <div className="secondary-actions">
                        <Button onClick={handleEmail} className="secondary-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Email
                        </Button>

                        <Button onClick={handleViewLarger} className="secondary-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v4m0 0v0m-6-6v0M9 21H5a2 2 0 0 1-2-2v-4m0 0v0m6 6v0" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Larger Map
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            {/* Google Maps Embed */}
            <Col lg={8}>
              <Fade right>
                <Card className="map-embed-card">
                  <div className="map-embed-container">
                    <iframe
                      src={embedUrl}
                      className="google-maps-embed"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Adams Aurum Location - Al Rostamani Building"
                    ></iframe>
                    
                    {/* Map Overlay Controls */}
                    <div className="map-controls">
                      <Button 
                        className="map-control-btn"
                        onClick={handleViewLarger}
                        title="View larger map"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M15 3h4a2 2 0 0 1 2 2v4m-6-6v0M9 21H5a2 2 0 0 1-2-2v-4m6 6v0" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </Button>
                      
                      <Button 
                        className="map-control-btn"
                        onClick={handleGetDirections}
                        title="Get directions"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="m3 11 18-9v18l-18-9z" fill="currentColor"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>

        {/* Full Screen Map Modal */}
        {showMapModal && (
          <div 
            className="modal show d-block map-modal" 
            style={{backgroundColor: 'rgba(0,0,0,0.8)'}}
            onClick={() => setShowMapModal(false)}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <h5 className="modal-title text-gold">Adams Aurum - Al Rostamani Building, Dubai</h5>
                  <button 
                    type="button" 
                    className="btn-close btn-close-white"
                    onClick={() => setShowMapModal(false)}
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <div className="fullscreen-map-container">
                    <iframe
                      src={fullScreenEmbedUrl}
                      className="fullscreen-map"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Adams Aurum Location - Full Screen - Al Rostamani Building"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Form Header Section */}
      <section className="contact-header py-5">
        <Container>
          <Fade top>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <h1 className="display-4 fw-bold text-gold mb-4">
                  Connect With Our Experts
                </h1>
                <div className="divider-line mb-4"></div>
                <p className="lead" style={{color:'#666666'}}>
                  Our team of elite gold investment specialists is dedicated to
                  guiding you toward{" "}
                  <span className="text-gold">prosperous financial decisions</span>.
                  Whether you're beginning your investment journey or expanding your
                  portfolio, we deliver exceptional service rooted in expertise and integrity.
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section py-5">
        <Container>
          <Fade bottom>
            <Row>
              <Col lg={8} className="mx-auto mb-5">
                <Card className="form-card">
                  <Card.Body className="p-4">
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>
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
                            <Form.Label>
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phoneNumber"
                              placeholder="+971 50 123 4567"
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
                            <Form.Label>
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
                            <Form.Label>
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
                        <Form.Label>
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

                      <div className="text-center">
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
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Fade>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;