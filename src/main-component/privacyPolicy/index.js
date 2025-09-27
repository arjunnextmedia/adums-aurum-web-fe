import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import Hero4 from '../../components/hero4';
import About4 from '../../components/about4';
import ProjectSectionS4 from '../../components/ProjectsS4';
import ServiceSection3 from '../../components/Services3';
import Pricing from '../../components/Pricing';
import BlogSectionS2 from '../../components/BlogSectionS2';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo/adams-logo.png'
import Hero3 from '../../components/hero3';
import ProjectSection from '../../components/Projects';
import PrivacyPolicy from '../../components/privacyPolicy';


const PrivacyPolicyPage =() => {
    return(
        <>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>
     <PrivacyPolicy/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </>
    )
};
export default PrivacyPolicyPage;