import React from 'react'
import {Link} from 'react-router-dom'
import services from '../../api/serviceData'
import SectionTitle from '../SectionTitle'



const TeamSection = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(

        <section className="wpo-team-section section-padding" >
            <div className="container">
                <SectionTitle subTitle={'Our Services'} MainTitle={'Our Services'}/>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {services.map((service, aitem) => (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={aitem}>
                            <div className="wpo-team-item">
                                <div className="wpo-team-img">
                                    <img src={service.image} alt=""/>
                                    {/* <Link onClick={ClickHandler} to={`/team-single/${service.id}`}>
                                    <i className="ti-plus"></i>
                                    </Link> */}
                                </div>
                                <div className="wpo-team-text">
                                    <h3>
                                        {/* <Link onClick={ClickHandler} to={`/team-single/${service.id}`}> */}
                                        {service.title}
                                        {/* </Link> */}
                                        </h3>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TeamSection;