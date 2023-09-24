import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ config, children }) => {
  const settings = { ...config, nextArrow: <NextArrow />, prevArrow: <PreviousArrow /> };
  function NextArrow({ className, onClick }) {
    return <IoIosArrowForward color="black" fontSize="2em" className={className} onClick={onClick} />;
  }
  function PreviousArrow({ className, onClick }) {
    return <IoIosArrowBack color="black" fontSize="2em" className={className} onClick={onClick} />;
  }

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
