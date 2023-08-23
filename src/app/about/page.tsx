import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Banner from '../../components/Banner';
import Heading from '../../components/shared/Heading';
import EmployeesCardList from '../../components/EmployeesCardList';

export const metadata: Metadata = {
  title: 'About Us | Vision Creations',
  description: 'Vision Creations, we design your dream',
};

const AboutPage = () => {
  return (
    <main className='my-12 min-h-screen'>
      <div className='md:w-[90vw] flex justify-end'>
        <div className='md:w-4/5'>
          <div className='m-10 md:my-16 md:mx-0'>
            <Heading variant={'h1'} wrapperClass='mb-12'>
              About Us
            </Heading>
            <p className='first-letter:text-4xl mb-5'>
              Vision Creations is a multidisciplinary firm based in Bangalore, India, specializing in architectural and
              interior design solutions for various building typologies. Established in 2005, Vision Creations embarked
              on a mission to revolutionize the architectural and interior design process. By streamlining the entire
              journey, we sought to liberate our clients from the hassles of engaging multiple contractors, interior
              carpenters, and other service providers. As a comprehensive solution, Vision Creations took on the role of
              a single source for all architectural and interior design needs, encompassing design, styling, product
              sourcing, project management, and aftersales services.
            </p>
            <p className='mb-5'>
              With an impressive 18-year track record in the industry, Vision Creations has garnered trust and acclaim,
              particularly for our expertise in interior and exterior design. Our commitment to excellence, quality,
              honesty, transparency, and timely delivery serves as the bedrock of our company&#39;s identity.
            </p>
            <p className='mb-5'>
              We firmly believe in the adage, &quot;Home is where the heart is,&quot; and as such, every space should
              reflect the spirit, aspirations, and preferences of its inhabitants. Each project we undertake is
              meticulously tailored to meet the specific requirements of our clients, be it in terms of aesthetics,
              comfort, or budget considerations. By offering complete turnkey interiors, we provide a comprehensive
              solution that covers the design and manufacturing of furniture, wardrobes, decor accessories, wall art,
              customized carpets and bedding, as well as window dressings.
            </p>
            <p className='mb-5'>
              We understand the profound significance of a dream home in one&#39;s life. To ensure that your dream home
              materializes exactly as you envision it, Vision Creations empowers you with absolute freedom of choice in
              every aspect. Our team of design experts stands ready to offer detailed information, address queries, and
              alleviate any concerns you may have regarding your dream home interiors.
            </p>
            <p className='mb-5'>
              As one of Bangalore&#39;s premier interior and exterior designers, we pride ourselves on delivering
              exceptional design plans to our esteemed clients. Creativity and innovation are hallmarks of our work, as
              we leverage advanced technology to bring forth outstanding outcomes. Our dedicated team of designers truly
              walks the talk by attentively listening to the thoughts and ideas of each client, infusing their projects
              with our expertise and knowledge to create spaces that are perfect and uniquely tailored to their taste.
            </p>
            <p className='mb-5'>
              If you are in search of a company that genuinely comprehends your vision for your dream project&#39;s
              interior and exterior, Vision Creations stands as an excellent choice. Let us embark on this
              transformative journey together, as we bring your dreams to life and craft spaces that transcend
              imagination.
            </p>
          </div>
        </div>
      </div>
      <Banner
        src={'/images/careers.jpg'}
        wrapperClass='md:w-[90vw] mb-4'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation-on-scroll='repeat'
        data-te-animation-reset='true'
        data-te-animation='[fade-in_1s_ease-in-out]'
      ></Banner>
      <div className='w-4/5 mx-auto'>
        <div className='img-block flex flex-col md:flex-row-reverse mt-20 mb-0 md:w-3/4'>
          <div className='left'>
            <div className='content'>
              <div className='relative w-64 h-96 mx-auto'>
                <Image className='object-cover' src='/images/photo.webp' alt='contact-us' fill />
              </div>
            </div>
          </div>
          <div className='right flex flex-1 items-center justify-end'>
            <div className='content p-8 text-end'>
              <div className='font-bold text-neutral-800 text-xl md:text-2xl'>Anil Kumar</div>
              <div className='font-semibold text-base text-neutral-700 mb-5 md:mb-8'>CEO, Founder</div>
              <blockquote className='text-xl italic font-semibold text-gray-900'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 text-gray-400 dark:text-gray-600'
                  viewBox='0 0 24 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                    fill='currentColor'
                  ></path>
                </svg>
                <p>
                  To offer the ultimate solution to customers who seek nothing less than originality and unmatched
                  quality, by tirelessly driving innovation and fostering creativity.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <article id='our-team' className='my-36'>
        <EmployeesCardList />
      </article>
    </main>
  );
};

export default AboutPage;
