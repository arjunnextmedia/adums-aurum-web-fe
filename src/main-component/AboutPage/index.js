import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import abimg from '../../images/about/aboutDetails-img.png'
import Navbar2 from '../../components/Navbar2';
import bannerimg from '../../images/banners/banner2.png'
import VisionMission from '../../components/VisionMission';

const AboutPage =() => {
    return(
        <>
            {/* <Navbar Logo={Logo}/> */}
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>

            <PageTitle pageTitle={'About Us'} pagesub={'About'} backgroundImage={bannerimg} /> 
            <About abimg={abimg}/>
            <VisionMission/>
            <ProjectSection/>
            {/* <ServiceSection/> */}
            <TeamSection/>
            <FunFact fnClass={'wpo-fun-fact-section-s2'}/>
            {/* <Pricing/> */}
            {/* <Testimonial/> */}
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </>
    )
};
export default AboutPage;
