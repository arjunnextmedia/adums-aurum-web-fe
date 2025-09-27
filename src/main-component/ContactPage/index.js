import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo/adams-logo-horizontal-2.2.png'
import Navbar2 from '../../components/Navbar2';
import bannerimg from '../../images/banners/banner1.1.png'


const ContactPage =() => {
    return(
        <>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} backgroundImage={bannerimg}/> 
            <Contactpage/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </>
    )
};
export default ContactPage;

