import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/about/about-img.png'
import abimg2 from '../../images/about-shape3.png'


const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s4 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={abimg} alt="" />
                            <div className="wpo-about-img-text">
                                <h3 style={{color: '#fff'}}> Built on a <br/>Promise of Purity</h3>
                                {/* <p>Years of Experience</p> */}
                                <div className="about-shape">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                            <div className="left-shape">
                                <div className="square-shape"></div>
                                <div className="shape-top">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="shape-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>Why Choose Us</span>
                                <h2>We Offer You Confidence in Every Gram</h2>
                            </div>
                            <p>At Adams Aurum we are dedicated to offering more than just gold bullion we provide an
experience built on purity trust and long lasting value. Every bar we deliver is refined to
<span style={{color: '#D9771A'}}> 99.99 percent purity </span>  and certified for authenticity giving our clients complete confidence
in their investment.</p>
                            <p>With a wide range of options from 100g to 5kg and a team that values transparency and
professionalism we ensure every transaction is secure smooth and reliable.</p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn rounded">Explore Our Legacy</Link>
                                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invisible-title1">
                <h2>About</h2>
            </div>
        </div>
    )
}

export default About4;