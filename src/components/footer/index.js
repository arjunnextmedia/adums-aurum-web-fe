import React, { useEffect, useRef } from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo/adams-logo-horizontal-2.2.png'
import Projects from '../../api/project'

const Footer = (props) =>{
    const footerRef = useRef(null);

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const footer = footerRef.current;

            // Calculate if user has scrolled to bottom (with small tolerance)
            const scrolledToBottom = Math.ceil(windowHeight + scrollTop) >= documentHeight - 10;

            if (footer) {
                if (scrolledToBottom) {
                    footer.classList.add('scrolled-to-bottom');
                } else {
                    footer.classList.remove('scrolled-to-bottom');
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Check initial scroll position
        handleScroll();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <footer className={`wpo-site-footer ${props.ftClass}`} ref={footerRef}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt=""/></Link>
                                </div>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Viverra laoreet ultrices
                                    donec placerat commodo elementum justo, consequat.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">Uncompromising Purity</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Wide Range of Bullion Options</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Trusted Expertise</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Safe and Transparent Process</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">Legacy of Value</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Our Products</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">100g Gold Bar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">250g Gold Bar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">500g Gold Bar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">1kg Gold Bar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">5kg Gold Bar</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-location"></i>208, Al Qiyadah Building, <br/> Dubai International Airport, Dubai</li>
                                        <li>
                                            <i className="fi flaticon-telephone"></i>
                                            <a href='tel:+97142979110' style={{textDecoration: 'none',color:'white'}}>+971 4 297 9110</a>-Landline
                                            
                                            <br/>
                                            <a href='tel:+971569427727' style={{textDecoration: 'none',color:'white'}}>+971 56 942 7727</a>
                                            <br/>

                                            <a href='tel:+971569535775' style={{color:'white'}}>+971 56 953 5775</a>
                                        </li>
                                        <li><i className="fi flaticon-email"></i><a href='mailto:info@adamsaurum.com' style={{color:'white'}}> info@adamsaurum.com </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <ul>
                                <li>&copy; 2025 ADAMS AURUM. Design By <Link onClick={ClickHandler} to="https://nextmedia.ae/" target='_blank' style={{color:'#CAAB06'}}  >Next Media</Link>. All Rights
                                    Reserved.</li>
                                <li><Link onClick={ClickHandler} to="/terms-of-use">Terms of use |</Link> <Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;