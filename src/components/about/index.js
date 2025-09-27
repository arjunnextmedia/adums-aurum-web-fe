import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../../components/ModalVideo";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className={`wpo-about-area-s4 section-padding ${props.abClass}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="wpo-about-img">
              <img src={props.abimg} alt="about-image" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 colsm-12">
            <div className="wpo-about-text">
              <div className="wpo-about-title">
                <span>About Us</span>
                <h2>WE ARE... ADAMS AURUM!</h2>
              </div>
              {/* <h5>Over 25 years Liarch helping investors building their drea & business goals go to the perfection</h5> */}
              <p>
                Adams Aurum was founded with a vision to redefine the bullion
                market by offering an authentic selection of{" "}
                <strong> gold bars </strong> and <strong> bullion </strong>{" "}
                products. With a strong legacy of trust and expertise, Adams
                Aurum has grown into a respected name in the gold industry,
                catering to both individual and corporate investors.
              </p>
              <p>
                Our brand is committed to delivering premium-quality bullion in
                a range of weights, from 100g to 5kg, crafted with precision and
                guaranteed purity. We aim to make gold investment simple,
                secure, and accessible, ensuring every customer enjoys a
                seamless experience with timely delivery and reliable service.
              </p>
              <p>
                At Adams Aurum, we combine tradition with innovation. Each of
                our bullion products is designed with care, inspired by cultural
                heritage, and produced to meet global standards of excellence.
              </p>
              <p>
                Today, Adams Aurum stands as a trusted bullion partner across
                the region, empowering investors to secure their wealth with
                confidence and authenticity.
              </p>
              {/* <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                         Watch Our Video
                                    </li>
                                </ul>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
