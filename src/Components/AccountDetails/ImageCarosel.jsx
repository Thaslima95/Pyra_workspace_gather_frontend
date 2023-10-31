import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Office1 from "../../assets/Images/Desktop - 21.png";
import RightArrow from "../../assets/Images/Component 3 (6).png";
import "./ImageCarousel.css"; // Import a CSS file for your custom styling

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      <img src={RightArrow} alt="" />
    </button>
  );
};

export default function ImageCarousel() {
  console.log("carousel");
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-0" // Reduce or remove padding
    >
      {/* <div className="carousel-item">
        <img src={Office1} alt="" style={{ width: "494px", height: "298px" }} />
      </div>
      <div className="carousel-item">
        <img src={Office1} alt="" style={{ width: "494px", height: "298px" }} />
      </div> */}
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel>
  );
}
