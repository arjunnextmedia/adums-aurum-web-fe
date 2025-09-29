import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import '../../sass/components/_vision-mission.scss';

const VisionMission = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="vision-mission-section">
      <div className="container">
        <Fade bottom duration={1000}>
          <div className="section-title">
            <span className="subtitle">Our Foundation</span>
            <h2 className="main-title">Vision & Mission</h2>
            {/* <div className="title-divider">
              <span className="gold-line"></span>
              <span className="gold-dot"></span>
              <span className="gold-line"></span>
            </div> */}
          </div>
        </Fade>

        <div className="cards-row">
          <Zoom delay={200} duration={1000}>
            <div 
              className={`vision-mission-card mission-card ${activeCard === 'mission' ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard('mission')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-icon-wrapper">
                <div className="icon-circle">
                  <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="card-title">Our Mission</h3>
              
              <div className="card-content">
                <p className="card-text">
                  At Adams Aurum our mission is to deliver gold bullion of the highest quality supported by complete trust, authenticity and transparency. We are dedicated to giving every client confidence in their investment through ethical practices and exceptional service.
                </p>
              </div>

              {/* <div className="card-decorative-elements">
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
              </div> */}

              <div className="shimmer-effect"></div>
            </div>
          </Zoom>

          <Zoom delay={400} duration={1000}>
            <div 
              className={`vision-mission-card vision-card ${activeCard === 'vision' ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard('vision')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-icon-wrapper">
                <div className="icon-circle">
                  <svg className="card-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="icon-glow"></div>
              </div>
              
              <h3 className="card-title">Our Vision</h3>
              
              <div className="card-content">
                <p className="card-text">
                  Our vision is to establish Adams Aurum as the most reliable and respected name in the bullion industry, a brand that investors consistently value for its integrity, innovation and commitment to excellence. We strive to inspire confidence by setting new benchmarks in quality and trust for generations to come.
                </p>
              </div>

              <div className="card-decorative-elements">
                <div className="corner-decoration top-left"></div>
                <div className="corner-decoration top-right"></div>
                <div className="corner-decoration bottom-left"></div>
                <div className="corner-decoration bottom-right"></div>
              </div>

              <div className="shimmer-effect"></div>
            </div>
          </Zoom>
        </div>
      </div>

      {/* Floating particles animation */}
      {/* <div className="floating-particles">
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
      </div> */}
    </section>
  );
};

export default VisionMission;