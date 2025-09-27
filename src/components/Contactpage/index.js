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

  // Company Location Data - Updated with correct coordinates
  const companyLocation = {
    lat: 25.256328277672914,
    lng: 55.29989497538378,
    address: "Al Rostamani Building, Al Hamriya, Dubai, UAE",
    phone: "+971 4 297 9110",
    email: "info@adamsaurum.com",
    hours: "Mon-Fri: 9AM-6PM",
    googleMapsUrl: `https://www.google.com/maps/dir/?api=1&destination=25.256328277672914,55.29989497538378`
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
    window.open(`tel:${companyLocation.phone}`, '_self');
  };

  const handleEmail = () => {
    window.open(`mailto:${companyLocation.email}`, '_self');
  };

  const handleViewLarger = () => {
    setShowMapModal(true);
  };

  // Google Maps Embed URLs - Updated with your actual embed URL
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8819119542095!2d55.29989497538378!3d25.256328277672914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433ab051b025%3A0x7a65f3795ae1ef75!2sAl%20Rostamani%20Building%20-%20Al%20Hamriya%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1758888132784!5m2!1sen!2sin`;

  const fullScreenEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8819119542095!2d55.29989497538378!3d25.256328277672914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433ab051b025%3A0x7a65f3795ae1ef75!2sAl%20Rostamani%20Building%20-%20Al%20Hamriya%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1758888132785!5m2!1sen!2sin`;

  return (
    <div className="contact-page">
      <ToastContainer />

      {/* Header Section */}
   

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
                  <p className="lead text-light">
                    Located in the heart of Dubai's financial district, our office provides
                    convenient access for all your gold investment needs.
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
                    {/* Business Header */}
                    {/* <div className="business-header">
                      <div className="business-logo">
                        <div className="logo-circle">
                          <img src={imgIcon} alt="logo-icon" width={30} />
                        </div>
                      </div>
                      <div className="business-info">
                        <h3 className="business-name">Adams Aurum</h3>
                        <div className="business-rating">
                          <div className="stars">★★★★★</div>
                          <span className="rating-count">4.8 (127 reviews)</span>
                        </div>
                        <p className="business-type">Gold Investment & Trading</p>
                      </div>
                    </div> */}

                    {/* Quick Info */}
                    <div className="quick-info-section">
                      <div className="info-item">
                        <div className="info-icon address-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor"/>
                          </svg>
                        </div>
                        <div className="info-details">
                          <strong>Address</strong>
                          <p>Al Rostamani Building,<br/>
                          Al Hamriya, Dubai, UAE
                          </p>
                        </div>
                      </div>

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

                      {/* <div className="info-item">
                        <div className="info-icon services-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <div className="info-details">
                          <strong>Services</strong>
                          <p>Gold Trading • Investment Consulting • Secure Storage</p>
                        </div>
                      </div> */}
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons-section p-3">
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

                        {/* <Button className="secondary-btn">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          Save
                        </Button> */}
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
                      title="Adams Aurum Location"
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
                  <h5 className="modal-title text-gold">Adams Aurum - Dubai Office</h5>
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
                      title="Adams Aurum Location - Full Screen"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Form Section */}
         <section className="contact-header py-5 ">
        <Container>
          <Fade top>
            <Row>
              <Col lg={8} className="mx-auto text-center">
                <h1 className="display-4 fw-bold text-gold mb-4">
                  Connect With Our Experts
                </h1>
                <div className="divider-line mb-4"></div>
                <p className="lead text-light">
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
      <section className="contact-form-section py-5 ">
        <Container>
          <Fade bottom>
            <Row>
              <Col lg={8} className="mx-auto mb-5">
                {/* <div className="section-header text-center mb-5">
                  <h2 className="display-5 fw-bold text-gold mb-3">
                    Begin Your Gold Journey
                  </h2>
                  <div className="divider-line mx-auto mb-4"></div>
                  <p className="lead text-light">
                    Complete the form below and our expert will contact you within 24 hours
                  </p>
                </div> */}

                <Card className="form-card">
                  <Card.Body className="p-4">
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

                      {/* <div className="text-center mt-3">
                        <div className="security-badge d-flex align-items-center justify-content-center">
                          <span className="shield-icon me-2">🔒</span>
                          <small className="text-light">256-bit SSL Encrypted</small>
                        </div>
                      </div> */}
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