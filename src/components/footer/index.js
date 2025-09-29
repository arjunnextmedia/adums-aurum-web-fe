import React, { useEffect, useRef } from 'react'
import {Link}  from 'react-router-dom'
// import Logo from '../../images/logo/adams-logo-horizontal-2.2.png'
import Logo from '../../images/logo/adams-logo-horizontal-latest2.png'
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
                                    <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt="ADAMS AURUM LOGO"/></Link>
                                </div>
                                <p>Adams Aurum – your trusted bullion partner, offering 99.99% pure 
                                    gold with guaranteed authenticity and long-term value.</p>
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
                                    <li>Uncompromising Purity</li>
                                    <li>Wide Range of Bullion Options</li>
                                    <li>Trusted Expertise</li>
                                    <li>Safe and Transparent Process</li>
                                    <li>Legacy of Value</li>
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
                                        <li><i className="fi flaticon-location"></i>
       Al Rostamani Building<br/>
                            (Al Qiyada Building)<br/>
                            Dubai, UAE
                                        </li>
                                        <li>
                                            <i className="fi flaticon-telephone"></i>
                                            <a href='tel:+97142979110' >+971 4 297 9110 <span> - Landline</span></a> 
                                            
                                            <br/>
                                            <a href='tel:+971569427727' >+971 56 942 7727</a>
                                            <br/>

                                            <a href='tel:+971569535775' >+971 56 953 5775</a>
                                        </li>
                                        <li><i className="fi flaticon-email"></i><a href='mailto:info@adamsaurum.com' > info@adamsaurum.com </a></li>
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