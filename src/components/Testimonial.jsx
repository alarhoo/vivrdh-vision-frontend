import Image from 'next/image';
import React from 'react';
import { getStrapiMedia } from '../../utils/media';

const Testimonial = ({ data }) => {
  const testimonials = data?.map((item, i) => {
    item = item.attributes;
    return (
      <>
        {i == 0 ? (
          <div
            className={`carousel-item relative float-left w-full -mr-[100%] hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            key={i}
            data-te-carousel-item
            data-te-carousel-active
          >
            <Image
              className='rounded-full object-cover shadow-lg mb-6 mx-auto'
              src={getStrapiMedia(item.picture.data.attributes.url)}
              alt='avatar'
              width={100}
              height={100}
              style={{ width: '150px', height: '150px' }}
            />
            <div className='flex flex-wrap justify-center'>
              <div className='grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3'>
                <h5 className='text-lg font-bold mb-3'>{item.name}</h5>
                <p className='font-medium text-gray-700 mb-4'>{item.client}</p>
                <p className='text-gray-500 mb-6'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='w-6 pr-2 inline-block'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                  {item.quote}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`carousel-item relative float-left w-full -mr-[100%] hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            key={i}
            data-te-carousel-item
          >
            <Image
              className='rounded-full object-cover shadow-lg mb-6 mx-auto'
              src={getStrapiMedia(item.picture.data.attributes.url)}
              alt='avatar'
              width={100}
              height={100}
              style={{ width: '150px', height: '150px' }}
            />
            <div className='flex flex-wrap justify-center'>
              <div className='grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3'>
                <h5 className='text-lg font-bold mb-3'>{item.name}</h5>
                <p className='font-medium text-gray-700 mb-4'>{item.client}</p>
                <p className='text-gray-500 mb-6'>
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='quote-left'
                    className='w-6 pr-2 inline-block'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                    ></path>
                  </svg>
                  {item.quote}
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  });
  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='mb-32 text-center'>
        <div id='carouselExampleCaptions' className='relative' data-te-carousel-init data-te-carousel-slide>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {testimonials}
          </div>
          <button
            className='absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
            type='button'
            data-te-target='#carouselExampleCaptions'
            data-te-slide='prev'
          >
            <span className='inline-block h-8 w-8'>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                className='text-neutral-800'
              >
                <path
                  fill='currentColor'
                  d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'
                />
              </svg>
            </span>
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Previous
            </span>
          </button>
          <button
            className='absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
            type='button'
            data-te-target='#carouselExampleCaptions'
            data-te-slide='next'
          >
            <span className='inline-block h-8 w-8'>
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                className='text-neutral-800'
              >
                <path
                  fill='currentColor'
                  d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'
                />
              </svg>
            </span>
            <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
              Next
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
