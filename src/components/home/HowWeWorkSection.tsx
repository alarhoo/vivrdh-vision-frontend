import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HowWeWorkSection = () => {
  return (
    <section className='h-screens py-24'>
      <div className='container mx-auto'>
        <h2 className='logo-text text-4xl uppercase tracking-widest mb-8'>
          Our <span className='logo-color'>Services</span>{' '}
        </h2>
        <div className='flex flex-col md:flex-row gap-6s'>
          <div className='flex-1 md:p-5 group'>
            <div className='p-5 group-hover:bg-[#f4f4f4]'>
              <div className=''>
                <Image
                  src='/images/architecture-service.webp'
                  alt='Architecture Service'
                  width={450}
                  height={300}
                  className='object-cover'
                />
                <h3 className='text-xl tracking-widest font-thin my-3'>ARCHITECTURE</h3>
                <div className='line w-16 h-[1px] mt-3 mb-3 bg-opacity-20 logo-bg-color group-hover:w-full group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out'></div>
                <p
                  className='text-zinc-500'
                  data-te-animation-init
                  data-te-animation-start='onScroll'
                  data-te-animation='[fade-in_1s_ease-in-out]'
                >
                  We encompass innovative design concepts, meticulous planning, and expert construction management to
                  bring your architectural vision to life, ensuring structural integrity and aesthetic excellence.
                </p>
              </div>
            </div>
          </div>

          <div className='flex-1 md:p-5 group'>
            <div className='p-5 group-hover:bg-[#f4f4f4]'>
              <div className=''>
                <Image
                  src='/images/interior-service.webp'
                  alt='Interior Service'
                  width={450}
                  height={300}
                  className='object-cover'
                />
                <h3 className='text-xl tracking-widest font-thin my-3'>INTERIOR DESIGN</h3>
                <div className='line w-16 h-[1px] mt-3 mb-3 bg-opacity-20 logo-bg-color group-hover:w-full group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out'></div>
                <p
                  className='text-zinc-500'
                  data-te-animation-init
                  data-te-animation-start='onScroll'
                  data-te-animation='[fade-in_1s_ease-in-out]'
                >
                  We offer a personalized touch, leveraging creative expertise and a keen eye for detail to transform
                  your spaces into functional, aesthetically pleasing environments that reflect your unique style and
                  preferences.
                </p>
              </div>
            </div>
          </div>

          <div className='flex-1 md:p-5 group'>
            <div className='p-5 group-hover:bg-[#f4f4f4]'>
              <div className=''>
                <Image
                  src='/images/commercial-service.webp'
                  alt='Commercial Service'
                  width={450}
                  height={300}
                  className='object-cover'
                />
                <h3 className='text-xl tracking-widest font-thin my-3'>COMMERCIAL</h3>
                <div className='line w-16 h-[1px] mt-3 mb-3 bg-opacity-20 logo-bg-color group-hover:w-full group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out'></div>
                <p
                  className='text-zinc-500'
                  data-te-animation-init
                  data-te-animation-start='onScroll'
                  data-te-animation='[fade-in_1s_ease-in-out]'
                >
                  we strategically blend branding and functionality, employing a data-driven approach to create
                  captivating commercial spaces that maximize customer engagement and support business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
