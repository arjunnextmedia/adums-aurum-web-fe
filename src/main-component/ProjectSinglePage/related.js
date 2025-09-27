import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "../../api/project";
import { Link } from "react-router-dom";

const RelatedProject = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="wpo-project-single-item">
      <div className="wpo-project-single-title">
        <h3>Related Products</h3>
      </div>
      <div className="wpo-project-area-s2">
        <Slider {...settings}>
          {Projects.slice(0, 6).map((project, pot) => (
            <div className="wpo-project-item" key={pot}>
              <div className="wpo-project-img" >
                <img src={project.pImg} alt={project.title} />
                <div className="left-border"></div>
                <div className="right-border"></div>
              </div>
              <div className="wpo-project-text" style={{color: '#fff'}}>
                <h2 >
                  <Link
                    onClick={ClickHandler}
                    to={`/project-single/${project.Id}`}
                   className="text-gold"
                  >
                    {project.title}
                  </Link>
                </h2>
                <span>{project.subTitle}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProject;
