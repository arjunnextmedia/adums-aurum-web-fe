import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from "../../api/blogs";
import SectionTitle3 from "../SectionTitle3";
import { Link } from "react-router-dom";
import bShape1 from "../../images/blog/Vector3.png";
import bShape2 from "../../images/blog/Vector4.png";

const BlogSectionS2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const settings = {
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
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="wpo-blog-section-s2 section-padding" id="blog">
      <div className="container">
        <SectionTitle3
          subTitle={"Our Services"}
          MainTitle={"Secure Your Golden Future"}
        />
        <div className="wpo-blog-items">
          {/* Wrapped the existing structure with Slider */}
          <Slider {...settings}>
            {blogs.map((blog, Bitem) => (
              <div key={Bitem} className="px-2">
                {/* Added h-100 class to make card take full height */}
                <div className="wpo-blog-item h-100 d-flex flex-column">
                  <div className="wpo-blog-img">
                    <img src={blog.screens} alt="" className="img-fluid" />
                    {/* <div className="thumb">{blog.thumb}</div> */}
                  </div>
                  {/* Added flex-grow-1 to make content area expand */}
                  <div className="wpo-blog-content flex-grow-1 d-flex flex-column">
                    {/* <ul>
                      <li>{blog.create_at}</li>
                      <li>By <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.author}</Link></li>
                    </ul> */}
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.id}`}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                    {/* Added flex-grow-1 to push other content to bottom if needed */}
                    <p className="flex-grow-1">{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="vector-1">
        <img src={bShape1} alt="" />
      </div>
      <div className="vector-2">
        <img src={bShape2} alt="" />
      </div>
    </section>
  );
};

export default BlogSectionS2;