import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectsS2 from '../../components/ProjectsS2'
import Logo from '../../images/logo.svg'
import Navbar2 from '../../components/Navbar2';
import bannerimg from '../../images/banners/banner3.3.png'

const ProjectPage =() => {
    return(
        <>
            <Navbar2 Logo={Logo} hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Products'} pagesub={'Products'} backgroundImage={bannerimg}/> 
            <ProjectsS2/>
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </>
    )
};
export default ProjectPage;
