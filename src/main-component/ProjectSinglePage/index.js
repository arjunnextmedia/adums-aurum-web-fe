import React from 'react';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle';
import Scrollbar from '../../components/scrollbar';
import { useParams } from 'react-router-dom';
import Projects from '../../api/project';
import RelatedProject from './related';
import Footer from '../../components/footer';
import Logo from '../../images/logo.svg';
import bannerimg from '../../images/banners/banner3.3.png';

const ProjectSinglePage = () => {
    const { id } = useParams();

    // Find product details from API/project data
    const productDetails = Projects.find(item => item.Id === id);

    return (
        <>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'} />
            <PageTitle
                pageTitle={productDetails.title}
                pagesub={'Gold Bullion'}
                backgroundImage={bannerimg}
            />
            <div className="wpo-project-single-area section-padding" style={{ backgroundColor: '#202026' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <div className="wpo-project-single-title">
                                                <h3>{productDetails.title}</h3>
                                            </div>
                                            <p>
                                                {productDetails.description ||
                                                    `At Adams Aurum, our ${productDetails.title} is crafted with 999.9 purity and certified authenticity. 
                                                    Designed for investors who value trust, long-term wealth, and premium quality.`}
                                            </p>
                                            <p>
                                                Whether you are a new investor or an experienced one, the {productDetails.title} 
                                                offers security, reliability, and global recognition. Its refined design 
                                                makes it both a powerful investment tool and a timeless asset.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <img src={productDetails.ps1img} alt={productDetails.title} />
                                    </div>

                                    {/* Our Strategies */}
                                    <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Why Choose This Bar</h3>
                                                </div>
                                                <p>
                                                    Each {productDetails.title} is produced to the highest global standards. 
                                                    It represents purity, precision, and value that lasts for generations.
                                                </p>
                                                <ul>
                                                    <li>999.9 purity with certified authenticity.</li>
                                                    <li>Crafted to meet international bullion standards.</li>
                                                    <li>Secure and reliable for long-term wealth preservation.</li>
                                                    <li>Backed by Adams Aurum’s trust and expertise.</li>
                                                    <li>Suitable for both individual and institutional investors.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-item-quote">
                                                    <p>
                                                        "The {productDetails.title} is more than just gold — 
                                                        it is a symbol of stability, heritage, and wealth security."
                                                    </p>
                                                    <span>Adams Aurum – <span>Premium Bullion</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Approach Section */}
                                    <div className="wpo-project-single-item">
                                        <div className="wpo-project-single-title">
                                            <h3>Our Approach</h3>
                                        </div>
                                        <p>
                                            At Adams Aurum, we blend tradition with innovation to deliver bullion that 
                                            reflects both cultural heritage and modern precision. Every {productDetails.title} 
                                            is refined with care to ensure it meets global benchmarks of excellence. 
                                            Our approach is simple — purity, transparency, and trust at every step.
                                        </p>
                                    </div>

                                    {/* Gallery Section */}
                                    <div className="wpo-project-single-gallery">
                                        <div className="row mt-4">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src={productDetails.psub1img1} alt={productDetails.title} />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src={productDetails.psub1img2} alt={productDetails.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Goals & Results */}
                                    <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Investment Benefits</h3>
                                                </div>
                                                <ul>
                                                    <li>Preserves wealth across generations.</li>
                                                    <li>Globally recognized and trusted bullion weight.</li>
                                                    <li>Provides liquidity and long-term security.</li>
                                                    <li>A stable choice for portfolio diversification.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 list-widget-s">
                                                <div className="wpo-project-single-title">
                                                    <h3>Ideal For</h3>
                                                </div>
                                                <ul>
                                                    <li>First-time investors entering the bullion market.</li>
                                                    <li>Seasoned investors seeking larger holdings.</li>
                                                    <li>Corporate and institutional investments.</li>
                                                    <li>Gifting as a symbol of prosperity and trust.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <RelatedProject />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer ftClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </>
    );
};

export default ProjectSinglePage;
