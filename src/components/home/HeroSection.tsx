import Link from 'next/link';
import React from 'react';
import Banner from '@/components/Banner';

interface Props {
  heading: string;
  message: string;
  cta: string;
}
const HeroSection = (props: Props) => {
  return (
    <section>
      <div className='flex items-center justify-center h-screen bg-fixed bg-cover bg-center custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
        <div className='p-5 text-white z-[2] w-3/4'>
          <h2
            className='text-3xl md:text-4xl font-normal tracking-[5px] uppercase'
            data-te-animation-init
            data-te-animation-start='onLoad'
            data-te-animation='[fade-in-up_1s_ease-in-out]'
          >
            {props.heading}
          </h2>
          <p
            className='py-5 text-xl md:text-2xl md:w-3/4'
            data-te-animation-init
            data-te-animation-start='onLoad'
            data-te-animation='[fade-in-up_1s_ease-in-out]'
          >
            {props.message}
          </p>
          <Link
            href='/projects'
            data-te-animation-init
            data-te-animation-start='onLoad'
            data-te-animation='[fade-in-up_1s_ease-in-out]'
          >
            <button type='button' title='View Projects' className='px-8 py-2 border'>
              {props.cta}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
