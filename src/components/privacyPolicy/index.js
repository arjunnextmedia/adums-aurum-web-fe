import React from 'react';
import { Container, Row, Col } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';
import PageTitle from '../pagetitle';
import bannerimg from '../../images/banners/banner2.png'

const PrivacyPolicy = () => {
    return (
        <>
            {/* Page Title Section */}
        
            <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'} backgroundImage={bannerimg} /> 

            {/* Privacy Policy Content */}
            <section style={{
  background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.05), transparent)',
                padding: '100px 0'
            }}>
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <div style={{
                                background: '#ffffff',
                                padding: '60px',
                                borderRadius: '16px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                border: '1px solid #e9ecef'
                            }}>
                                <div style={{ marginBottom: '40px' }}>
                                    <p style={{
                                        color: '#6c757d',
                                        fontSize: '16px',
                                        marginBottom: '30px',
                                        fontStyle: 'italic'
                                    }}>
                                        <strong>Effective Date:</strong> January 1, 2024<br/>
                                        <strong>Last Updated:</strong> September 26, 2025
                                    </p>
                                </div>

                                {/* Introduction */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        1. Introduction
                                    </h2>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>
                                        At Adams Aurum ("we," "us," or "our"), we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage in precious metals transactions with us.
                                    </p>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8'
                                    }}>
                                        By accessing our website or using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy and our Terms of Use.
                                    </p>
                                </div>

                                {/* Information We Collect */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        2. Information We Collect
                                    </h2>
                                    
                                    <h3 style={{
                                        color: '#D4AF37',
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}>
                                        2.1 Personal Information
                                    </h3>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '25px'
                                    }}>
                                        <li>Full name, address, and contact information</li>
                                        <li>Government-issued identification documents</li>
                                        <li>Financial information and banking details</li>
                                        <li>Investment preferences and transaction history</li>
                                        <li>Employment and income information</li>
                                        <li>Tax identification numbers</li>
                                    </ul>

                                    <h3 style={{
                                        color: '#D4AF37',
                                        fontSize: '20px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}>
                                        2.2 Technical Information
                                    </h3>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '25px'
                                    }}>
                                        <li>IP address and device information</li>
                                        <li>Browser type and version</li>
                                        <li>Website usage patterns and analytics</li>
                                        <li>Cookies and similar tracking technologies</li>
                                        <li>Login credentials and account activity</li>
                                    </ul>
                                </div>

                                {/* How We Use Your Information */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        3. How We Use Your Information
                                    </h2>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '20px'
                                    }}>
                                        <li>Process and fulfill your precious metals orders and transactions</li>
                                        <li>Verify your identity and comply with regulatory requirements</li>
                                        <li>Provide customer support and respond to inquiries</li>
                                        <li>Send important updates about your account and transactions</li>
                                        <li>Improve our website, services, and customer experience</li>
                                        <li>Conduct market research and analysis</li>
                                        <li>Prevent fraud and ensure transaction security</li>
                                        <li>Comply with legal and regulatory obligations</li>
                                    </ul>
                                </div>

                                {/* Information Sharing */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        4. Information Sharing and Disclosure
                                    </h2>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>
                                        We may share your information in the following circumstances:
                                    </p>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '20px'
                                    }}>
                                        <li>With trusted third-party service providers who assist in our operations</li>
                                        <li>To comply with legal requirements, court orders, or government requests</li>
                                        <li>To protect our rights, property, or safety, or that of our customers</li>
                                        <li>In connection with a merger, acquisition, or sale of assets</li>
                                        <li>With your explicit consent or at your direction</li>
                                    </ul>
                                </div>

                                {/* Data Security */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        5. Data Security
                                    </h2>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>
                                        We implement industry-standard security measures to protect your personal information, including:
                                    </p>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '20px'
                                    }}>
                                        <li>SSL encryption for all data transmissions</li>
                                        <li>Secure servers and data centers with restricted access</li>
                                        <li>Regular security audits and monitoring</li>
                                        <li>Employee training on data protection protocols</li>
                                        <li>Multi-factor authentication for account access</li>
                                    </ul>
                                </div>

                                {/* Your Rights */}
                                <div style={{ marginBottom: '50px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        6. Your Rights and Choices
                                    </h2>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>
                                        You have the right to:
                                    </p>
                                    <ul style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        paddingLeft: '20px',
                                        marginBottom: '20px'
                                    }}>
                                        <li>Access and review your personal information</li>
                                        <li>Request corrections to inaccurate information</li>
                                        <li>Request deletion of your personal information (subject to legal requirements)</li>
                                        <li>Opt-out of marketing communications</li>
                                        <li>Restrict or object to certain processing activities</li>
                                        <li>Request data portability where applicable</li>
                                    </ul>
                                </div>

                                {/* Contact Information */}
                                <div style={{ marginBottom: '30px' }}>
                                    <h2 style={{
                                        color: '#2c3e50',
                                        fontSize: '32px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        borderBottom: '3px solid #D4AF37',
                                        paddingBottom: '10px'
                                    }}>
                                        7. Contact Us
                                    </h2>
                                    <p style={{
                                        color: '#495057',
                                        fontSize: '16px',
                                        lineHeight: '1.8',
                                        marginBottom: '20px'
                                    }}>
                                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                                    </p>
                                    <div style={{
                                        background: '#f8f9fa',
                                        padding: '25px',
                                        borderRadius: '8px',
                                        border: '1px solid #e9ecef'
                                    }}>
                                        <p style={{ color: '#495057', fontSize: '16px', margin: '0 0 10px' }}>
                                            <strong>Adams Aurum</strong><br/>
                                            Email: privacy@adamsaurum.com<br/>
                                            Phone: +1 (555) 123-4567<br/>
                                            Address: 123 Gold Street, Financial District, NY 10001
                                        </p>
                                    </div>
                                </div>

                                {/* Back to Home Link */}
                                <div className="text-center" style={{ marginTop: '40px' }}>
                                    <Link 
                                        to="/" 
                                        style={{
                                            background: 'linear-gradient(135deg, #D4AF37 0%, #F4E87C 100%)',
                                            color: '#2c3e50',
                                            padding: '12px 30px',
                                            borderRadius: '25px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            display: 'inline-block',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                                        }}
                                    >
                                        Back to Home
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PrivacyPolicy;