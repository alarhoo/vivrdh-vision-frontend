import React from 'react';
import { fetchAPI } from '../../../utils/api';
import Testimonial from '../Testimonial';

const TestimonialSection = async () => {
  let testimonials = await fetchAPI('/testimonials?populate=*');
  testimonials = testimonials.data;

  return (
    <section className='w-11/12 max-w-5xl mx-auto my-6 md:my-36'>
      <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-20 md:mb-32 text-center md:text-left w-full md:w-1/2 hidden md:block'>
        Find Out What Our Clients Say About Us
      </h2>
      <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-20 md:mb-32 text-center md:text-left w-full md:w-1/2 md:hidden'>
        Testimonials
      </h2>
      <Testimonial data={testimonials}></Testimonial>
    </section>
  );
};

export default TestimonialSection;
