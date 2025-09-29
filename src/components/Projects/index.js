import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Projects from "../../api/project";

class ProjectSection extends Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div
        className={`wpo-project-area ${this.props.pClass}`}
        // style={{ background: "#202026" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="wpo-project-wrap project-active owl-carousel">
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "2rem",
                  marginTop: "2rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "18px",
                    lineHeight: "26px",
                    color: "#CAAB06",
                    textAlign: "center",
                  }}
                >
                  Our Products
                </span>
                <h2
                  className="wpo-project-Heading"
                  style={{
                    color: "#000",
                    fontSize: "2.5rem",
                    fontWeight: "700",
                    textAlign: "center",
                    marginBottom: "3rem",
                    marginTop: "2rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                  }}
                >
                  Explore Our Bullion Range
                </h2>{" "}
              </div>

              <Slider {...settings}>
                {Projects.slice(0, 4).map((project, pot) => (
                  <div className="wpo-project-item" key={pot}>
                    <div className="wpo-project-img">
                      <img src={project.pImg} alt="" />
                      <div className="left-border"></div>
                      <div className="right-border"></div>
                    </div>
                    <div className="wpo-project-text">
                      <h2>
                        <Link
                          onClick={ClickHandler}
                          to={`/project-single/${project.Id}`}
                        >
                          {project.title}
                        </Link>
                      </h2>
                      {/* <span>{project.subTitle}</span> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSection;
