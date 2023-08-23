import React from 'react';
import Image from 'next/image';
import Heading from '../../components/shared/Heading';

export const metadata = {
  title: 'Services | Vision Creations',
  description: 'Services provided by Vision Creations',
};

const ServicesPage = () => {
  return (
    <main className='my-28'>
      <div className='w-5/6 mx-auto'>
        <Heading variant={'h1'} wrapperClass='text-right mb-0'>
          Our Services
        </Heading>
        <Heading variant={'h4'} wrapperClass='text-right mb-16' div>
          we design all for you
        </Heading>
        <div className='md:w-4/5 mx-auto'>
          <div
            className='container md:w-1/2 my-10'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
            data-te-animation='[fade-in_1s_ease-in-out]'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              01
            </Heading>
            <Heading variant={'h4'} wrapperClass='mb-2' div>
              architectural design
            </Heading>
            <div className='relative h-64 md:h-96 md:w-96 md:min-w-[650px]'>
              <Image src='/images/design.jpg' className='' alt='undraw_business_chat' fill />
            </div>
          </div>
          <div
            className='container md:w-1/2 my-10 text-right md:ml-[50%]'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
            data-te-animation='[fade-in_1s_ease-in-out]'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              02
            </Heading>
            <Heading variant={'h4'} wrapperClass='mb-2' div>
              manufacturing
            </Heading>
            <div className='relative h-64 md:h-96 md:w-auto'>
              <Image src='/images/manufacturing.jpg' className='object-cover' alt='undraw_business_chat' fill />
            </div>
          </div>
          <div
            className='container md:w-1/2 my-10'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
            data-te-animation='[fade-in_1s_ease-in-out]'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              03
            </Heading>
            <Heading variant={'h4'} wrapperClass='' div>
              interior installation
            </Heading>
            <div className='relative h-96 md:w-96'>
              <Image src='/images/interior-design.jpeg' className='object-cover' alt='undraw_business_chat' fill />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
