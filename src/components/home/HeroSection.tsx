import Link from 'next/link';
import React from 'react';
import Banner from '@/components/Banner';

const HeroSection = () => {
  return (
    <section>
      <Link href='/projects'>
        <Banner
          src={'/images/hero-banner.jpg'}
          fullscreen
          wrapperClass='h-screen transition-all duration-300 filter grayscale-0 hover:grayscale-0 mb-4'
        ></Banner>
      </Link>
    </section>
  );
};

export default HeroSection;
