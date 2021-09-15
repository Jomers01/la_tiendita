import React from "react";
import Carousel from "styled-components-carousel";
import { DivCarousel } from "./styledSlider";
const Slider = () => {
  return (
    <Carousel
      slidesToShow={3}
      center
      breakpoints={[
        {
          size: 1000,
          settings: {
            slidesToShow: 1,
            showArrows: true,
            showIndicator: true,
            swipeable: true,
          },
        },
        {
          size: 600,
          settings: {
            slidesToShow: 3,
            showArrows: true,
            showIndicator: true,
            swipeable: true,
          },
        },
        {
          size: 1000,
          settings: {
            slidesToShow: 4,
            showArrows: true,
            showIndicator: true,
            center: true,
            swipeable: true,
          },
        },
      ]}
    >
      <DivCarousel>
        <img
          src="https://res.cloudinary.com/dpkaiokho/image/upload/v1631644712/latiendita/Banner_lx8b9a.png"
          alt="Banner"
        ></img>
      </DivCarousel>
      <DivCarousel>
        <img
          src="https://res.cloudinary.com/yhonamc/image/upload/v1631644538/banner_hdntmg.png"
          alt="Banner2"
        ></img>
      </DivCarousel>
    </Carousel>
  );
};

export default Slider;
