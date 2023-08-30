import type { Metadata } from 'next';
import React from 'react';
import CareersCardList from '../../components/CareersCardList';
import Banner from '../../components/Banner';
import Heading from '../../components/shared/Heading';
import ImageBlock from '../../components/shared/ImageBlock';

export const metadata: Metadata = {
  title: 'Careers | Vision Creations',
  description: 'Vision Creations, we design your dream',
};

const CareerPage = () => {
  return (
    <main>
      <Banner src={'/images/careers-banner.webp'} wrapperClass='grayscales mb-4'></Banner>
      <div className='mt-24 mb-16'>
        <Heading variant={'h1'} wrapperClass='text-center mb-0'>
          Work with us.
        </Heading>
        <Heading variant={'h4'} wrapperClass='text-center mb-0' div>
          Come design a better, more beautiful world with us.
        </Heading>
      </div>
      <div
        className='md:w-4/5 mx-auto'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation-on-scroll='repeat'
        data-te-animation-reset='true'
        data-te-animation='[fade-in_1s_ease-in-out]'
      >
        <ImageBlock
          header='Join us'
          subheader='Come design a better, more beautiful world with us.'
          image={{
            src: `/images/careers.webp`,
            alt: `project.gallery`,
            width: '500',
            height: '450',
          }}
          direction='start'
          wrapperClass='my-12'
          priority={false}
        >
          <p className='text-green-600s'>
            Elevate environments with expertise: Collaborate with our architecture and interior design firm to craft
            inspiring spaces that fuse aesthetics and functionality. Unleash your creativity in a dynamic team committed
            to shaping the future of design.
          </p>
        </ImageBlock>
      </div>
      <article className='md:w-4/5 mx-auto pb-20'>
        <CareersCardList />
      </article>
    </main>
  );
};

export default CareerPage;
