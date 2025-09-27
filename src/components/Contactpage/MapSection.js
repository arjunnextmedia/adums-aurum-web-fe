import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import './MapSection.css';

const MapSection = () => {
  const [showModal, setShowModal] = useState(false);

  // Company coordinates (Dubai International Airport area)
  const companyLocation = {
    lat: 25.2532,
    lng: 55.3657,
    address: "208, Al Qiyadah Building, Dubai International Airport, Dubai",
    placeId: "ChIJ5R7DE5RdXz4RYlJb3b2kOqA", // Get this from Google Places API
    googleMapsUrl: "https://www.google.com/maps/place/25.2532,55.3657"
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`;
    window.open(url, '_blank');
  };

  const handleViewLarger = () => {
    setShowModal(true);
  };

  const handleCall = () => {
    window.open('tel:+97142979110', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:info@adamsaurum.com', '_self');
  };

  // Create Google Maps Embed URL with custom styling
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.123456789!2d${companyLocation.lng}!3d${companyLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzExLjUiTiA1NcKwMjEnNTYuNSJF!5e1!3m2!1sen!2sae!4v1234567890123`;

  const fullScreenEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.123456789!2d${companyLocation.lng}!3d${companyLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzExLjUiTiA1NcKwMjEnNTYuNSJF!5e1!3m2!1sen!2sae!4v1234567890124`;

  return (
    <section className="google-maps-section py-5">
      <Container>
        <Fade bottom>
          <Row>
            <Col lg={12}>
              <div className="section-header text-center mb-5">
                <h2 className="display-5 fw-bold text-gold mb-3">
                  Visit Our Dubai Office
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
                  <div className="business-header">
                    <div className="business-logo">
                      <div className="logo-circle">
                        <span className="logo-text">AA</span>
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
                  </div>

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
                        <p>{companyLocation.address}</p>
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
                        <p>
                          <a href="tel:+97142979110" className="phone-link">
                            +971 4 297 9110
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
                        <small className="text-muted">Mon-Fri: 9AM-6PM</small>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="info-icon services-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="info-details">
                        <strong>Services</strong>
                        <p>Gold Trading • Investment Consulting • Secure Storage</p>
                      </div>
                    </div>
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

                      <Button className="secondary-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="me-2">
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Save
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
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="xl" 
        centered
        className="map-modal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-gold">Adams Aurum - Dubai Office</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
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
        </Modal.Body>
      </Modal>
    </section>
  );
};
export default MapSection;