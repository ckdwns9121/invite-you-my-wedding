import React from "react";
import Slider from "react-slick";
import { useEffect } from "react";

export default function MultiSlick({ children }) {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    arrows: false,
    dots: true,
    slidesPerRow: 2,
    accessibility: false,
  };
  useEffect(() => {
    const slides = document.querySelectorAll(".slick-track div");
    slides.forEach((slide) => {
      slide.removeAttribute("tabindex");
    });
  }, []);

  return <Slider {...settings}>{children}</Slider>;
}
