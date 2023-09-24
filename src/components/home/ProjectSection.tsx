'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgArrowRight, CgArrowLeft } from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styles from '@/app/styles.module.css';
import { fetchAPI } from '../../../utils/api';
import { getStrapiMedia } from '../../../utils/media';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectSection = () => {
  const [featuredProjects, setFeaturedProjects] = useState([{}]);

  async function getFeaturedProjectsData() {
    const response = await fetchAPI('/projects?filters[featured][$eq]=True&populate=*');
    console.log(response);
    setFeaturedProjects(response.data);
  }
  useEffect(() => {
    getFeaturedProjectsData();
  }, []);

  // Carousel control
  function NextArrow(props: { className?: any; onClick?: any }) {
    const { className, onClick } = props;
    return <IoIosArrowForward color='black' fontSize='2em' className={className} onClick={onClick} />;
  }
  function PreviousArrow(props: { className?: any; onClick?: any }) {
    const { className, onClick } = props;
    return <IoIosArrowBack color='black' fontSize='2em' className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    // fade: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  // const featured = ''
  const featured = featuredProjects?.map((item: any, i: number) => {
    if (Object.keys(item).length === 0) {
      return <div key={i}>No featured projects found</div>;
    }
    const slug = `${item.attributes.name.toLowerCase().replace(' ', '-')}-at-${item.attributes.location.city
      .toLowerCase()
      .replace(' ', '-')}`;

    return (
      <figure key={i} className='group relative w-1/2 h-80 overflow-hidden'>
        <Image
          src={getStrapiMedia(item.attributes.banner.data.attributes.url)}
          alt='text'
          fill
          className='object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75'
        />
        <div
          className='w-full h-auto px-5 py-8 text-white absolute -bottom-8 group-hover:bottom-0 left-0 z-10 text-center transition-all duration-300'
          style={{
            background: 'linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%)',
          }}
        >
          <figcaption className='text-2xl tracking-[2px] uppercase mb-3'>
            {item.attributes.name} at {item.attributes.location.city}
          </figcaption>
          <figcaption className='text-xl tracking-wide uppercase mb-2'>
            {item.attributes.dimension.toLocaleString('en')} {item.attributes.dimension_unit}
          </figcaption>
          <div className='line w-16 h-[1px] mt-3 mb-7 mx-auto bg-opacity-20 bg-white group-hover:w-10/12 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out'></div>
          <Link href={`/projects/${item.id}/${slug}`} className='hidden text-center group-hover:inline-block text-5xl'>
            <CgArrowRight />
          </Link>
        </div>
      </figure>
    );
  });

  return (
    <section className='h-screens py-12 mb-12'>
      <div className='container mx-auto'>
        <h2 className='logo-text text-4xl uppercase tracking-widest my-10'>
          Our <span className='logo-color'>Projects</span>
        </h2>
        <Link href={`/projects`} className='hidden text-center group-hover:inline-block text-5xl'>
          <h3 className='text-xl tracking-wide my-3'>View All</h3>
        </Link>

        <div className='container'>
          <Slider {...settings}>{featured}</Slider>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
