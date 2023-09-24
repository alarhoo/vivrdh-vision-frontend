'use client';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../../../utils/api';
import { getStrapiMedia } from '../../../utils/media';
import Testimonial from '../Testimonial';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const [testimonialsData, setTestimonialsData] = useState([{}]);

  async function getTestimonialsData() {
    const response = await fetchAPI('/testimonials?populate=*');
    console.log(response);
    setTestimonialsData(response.data);
  }
  useEffect(() => {
    getTestimonialsData();
  }, []);

  const testimonialsHTML = testimonialsData.map((item: any, i: number) => {
    console.log(item, testimonialsData);
    if (Object.keys(item).length === 0) {
      return <div key={i}>No testimonials found!</div>;
    }
    return (
      <div key={i} className='mb-12 md:mb-0'>
        <div className='mb-6 flex justify-center'>
          <Image
            src={getStrapiMedia(item.attributes.picture.data.attributes.url)}
            width={50}
            height={50}
            alt='test'
            className='w-32 rounded-full shadow-lg dark:shadow-black/20'
          />
        </div>
        <h5 className='mb-1 text-lg font-bold text-center'>{item.attributes.name}</h5>
        <h6 className='mb-4 font-medium logo-color text-center'>{item.attributes.client}</h6>
        <p
          className='mb-4 text-center'
          data-te-animation-init
          data-te-animation-start='onScroll'
          data-te-animation='[fade-in-up_1s_ease-in-out]'
        >
          {item.attributes.quote}
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960' className='inline-block w-6'>
            <path
              fill='currentColor'
              d='M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z'
            />
          </svg>
        </p>
      </div>
    );
  });
  const settings = {
    dots: true,
    // fade: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
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
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className='h-screens py-16 bg-slate-50'>
      <div className='w-4/5 md:w-11/12 mx-auto'>
        <h2 className='logo-text text-4xl uppercase tracking-widest mb-16'>
          What our <span className='logo-color'>clients&apos; Say?</span>{' '}
        </h2>
        <Slider {...settings}>{testimonialsHTML}</Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
