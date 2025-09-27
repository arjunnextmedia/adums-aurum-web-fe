import React from "react";
import { Container, Row, Col } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import PageTitle from "../pagetitle";
import bannerimg from "../../images/banners/banner2.png";
import Footer from "../footer";
import Scrollbar from "../scrollbar";

const TermsOfUse = () => {
  return (
    <>
      {/* Page Title Section */}
      <PageTitle
        pageTitle={"Terms of Use"}
        pagesub={"Terms of Use"}
        backgroundImage={bannerimg}
      />

      {/* Terms of Use Content */}
      <section
        style={{
          backgroundColor: "#202026",
          padding: "100px 0",
        }}
      >
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div
                style={{
                  background: "#2a2a30",
                  padding: "60px",
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: "#ffffff",
                }}
              >
                {/* Effective Date */}
                <div style={{ marginBottom: "40px" }}>
                  <p
                    style={{
                      color: "#bbb",
                      fontSize: "16px",
                      marginBottom: "30px",
                      fontStyle: "italic",
                    }}
                  >
                    <strong>Effective Date:</strong> January 1, 2024 <br />
                    <strong>Last Updated:</strong> September 26, 2025
                  </p>
                </div>

                {/* Section 1 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    1. Acceptance of Terms
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    By accessing and using the Adams Aurum website or services,
                    you agree to comply with and be bound by these Terms of Use.
                    If you do not agree, you may not access or use our services.
                  </p>
                </div>

                {/* Section 2 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    2. Use of Services
                  </h2>
                  <ul
                    style={{
                      color: "#ddd",
                      lineHeight: "1.8",
                      paddingLeft: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <li>Services are for lawful investment purposes only.</li>
                    <li>
                      You must not misuse the website for fraudulent or harmful
                      activities.
                    </li>
                    <li>
                      Unauthorized access or attempts to breach security are
                      strictly prohibited.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    3. Intellectual Property
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    All content, including logos, designs, images, and text on
                    the Adams Aurum website, is owned by or licensed to us. You
                    may not reproduce, distribute, or use our content without
                    prior written consent.
                  </p>
                </div>

                {/* Section 4 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    4. Limitation of Liability
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    Adams Aurum is not liable for any indirect, incidental, or
                    consequential damages resulting from the use or inability to
                    use our services. All investments carry risk, and past
                    performance does not guarantee future results.
                  </p>
                </div>

                {/* Section 5 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    5. Governing Law
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    These Terms of Use are governed by and construed in
                    accordance with the laws of New York, USA, without regard to
                    conflict of law principles.
                  </p>
                </div>

                {/* Section 6 */}
                <div style={{ marginBottom: "50px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    6. Changes to Terms
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    We reserve the right to update or modify these Terms of Use
                    at any time. Continued use of our services after changes
                    indicates acceptance of the new terms.
                  </p>
                </div>

                {/* Section 7 */}
                <div style={{ marginBottom: "30px" }}>
                  <h2
                    style={{
                      color: "#D4AF37",
                      fontSize: "28px",
                      fontWeight: "700",
                      marginBottom: "20px",
                      borderBottom: "2px solid #D4AF37",
                      paddingBottom: "10px",
                    }}
                  >
                    7. Contact Us
                  </h2>
                  <p style={{ color: "#eaeaea", lineHeight: "1.8" }}>
                    If you have any questions about these Terms of Use, please
                    contact us:
                  </p>
                  <div
                    style={{
                      background: "#202026",
                      padding: "25px",
                      borderRadius: "8px",
                      border: "1px solid rgba(212,175,55,0.4)",
                    }}
                  >
                    <p style={{ color: "#f1f1f1", margin: "0 0 10px" }}>
                      <strong>Adams Aurum</strong>
                      <br />
                      Email: terms@adamsaurum.com
                      <br />
                      Phone: +1 (555) 987-6543
                      <br />
                      Address: 123 Gold Street, Financial District, NY 10001
                    </p>
                  </div>
                </div>

                {/* Back to Home Link */}
                <div className="text-center" style={{ marginTop: "40px" }}>
                  <Link
                    to="/"
                    style={{
                      background:
                        "linear-gradient(135deg, #D4AF37 0%, #F4E87C 100%)",
                      color: "#202026",
                      padding: "12px 30px",
                      borderRadius: "25px",
                      textDecoration: "none",
                      fontWeight: "600",
                      fontSize: "16px",
                      display: "inline-block",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 6px 20px rgba(212, 175, 55, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 15px rgba(212, 175, 55, 0.3)";
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
      <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
    </>
  );
};

export default TermsOfUse;
