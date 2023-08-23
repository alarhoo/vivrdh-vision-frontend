import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Quote from '../components/shared/Quote';
import ProfileCard from '../components/shared/ProfileCard';
import Testimonial from '../components/Testimonial';
import Banner from '../components/Banner';
import { fetchAPI } from '../../utils/api';
import { getStrapiMedia } from '../../utils/media';
import styles from './styles.module.css';

export const metadata = {
  title: 'Vision Creations',
  description: 'Vision Creations, an interior design firm for all',
};

export default async function Home() {
  const feat = await fetchAPI(
    '/projects?filters[featured][$eq]=True&sort=start_date:ASC&pagination[pageSize]=2&populate=*'
  );
  const featured = feat?.data.map((item, i) => {
    const slug = `${item.attributes.name.toLowerCase().replace(' ', '-')}-at-${item.attributes.location.city
      .toLowerCase()
      .replace(' ', '-')}`;
    const classes = i % 2 ? 'w-full md:w-3/5 mt-10 md:mt-10' : 'w-full md:w-1/3 mt-4 md:-mt-24 h-fit';
    return (
      <figure key={i} className={classes}>
        <Link href={`/projects/${item.id}/${slug}`}>
          <Image
            className={`${styles.relative} grayscale grayscale-hover hover:filter-none transition duration-300`}
            src={getStrapiMedia(item.attributes.banner.data.attributes.url)}
            alt='project banner'
            fill
          />
        </Link>
        <figcaption className='font-bold'>
          {item.attributes.name} at {item.attributes.location.city}
        </figcaption>
        <figcaption className='text-grey'>
          {item.attributes.dimension.toLocaleString('en')} {item.attributes.dimension_unit}
        </figcaption>
      </figure>
    );
  });

  let testimonials = await fetchAPI('/testimonials?populate=*');
  testimonials = testimonials.data;

  return (
    <main>
      <section>
        <Banner
          src={'/images/home-banner-2.jpg'}
          fullscreen
          wrapperclassName='h-screen transition-all duration-300 filter grayscale-0 hover:grayscale-0 mb-4'
        >
          <div className='flex justify-center items-center h-[-webkit-fill-available]'>
            <Link
              className='inline-block px-7 py-3 mb-1 border-2 border-gray-800 text-gray-900 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              href='/projects'
              role='button'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              View Projects
            </Link>
          </div>
        </Banner>
      </section>
      <section className='md:h-screen bg-slate-50 flex items-center justify-center no-show'>
        <div
          data-te-animation-init
          data-te-animation-start='onScroll'
          data-te-animation-on-scroll='repeat'
          data-te-animation-reset='true'
          data-te-animation='[fade-in_1s_ease-in-out]'
          className='sticky'
        >
          <div className='w-4/5 mx-auto py-8'>
            <div className='flex flex-col-reverse lg:flex-row md:flex-col-reverse gap-10 md:gap-16'>
              <div className='md:flex items-center justify-center md:w-2/5 p-3 hidden'>
                <ProfileCard
                  header='Anil Kumar'
                  subheader='CEO, Founder'
                  image={{
                    src: '/images/photo.webp',
                    alt: 'CEO, Profile Pic',
                    width: 450,
                    height: 450,
                  }}
                ></ProfileCard>
              </div>
              <div className='flex flex-col justify-center items-center gap-8 flex-1 p-3s'>
                <Quote header='Our Vision'>
                  <p>
                    We offer our customers the best possible experience by constantly innovating and creating new
                    solutions.
                  </p>
                </Quote>
                <p>
                  Our services transcend the ordinary, encompassing a comprehensive spectrum of elements meticulously
                  tailored for our esteemed clients. This encompasses design, manufacturing, installation, and project
                  management, reflecting our extensive portfolio of successfully accomplished projects throughout South
                  India. We possess the art of transforming our clients&apos; visions and lifestyles into an
                  unparalleled way of life - be it within their living spaces or work environments - imbued with an
                  individualized touch that harmoniously resonates with their desires and essences.
                </p>
                <p>
                  Through a symphony of exquisite materials, intricate amalgamations, inventive illuminations, and
                  cutting-edge craftsmanship, Interior-Treasures takes immense pride in presenting a service that
                  transcends expectations, embracing a realm of distinction. Continually stretching the boundaries of
                  innovation, our pursuit is to stand as the definitive choice across the realms of opulence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className='w-11/12 mx-auto py-8'
          data-te-animation-init
          data-te-animation-start='onScroll'
          data-te-animation='[fade-in_1s_ease-in-out]'
        >
          <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-20 mb-12 text-center md:text-right'>
            How We Work
          </h2>
          <p className='w-4/5 mx-auto md:hidden text-lg text-slate-900'>
            Discover Our Process: Delve into our streamlined approach, where creativity meets precision. We listen
            intently, design thoughtfully, and craft meticulously to turn visions into extraordinary realities.
          </p>
          <div className='md:flex flex-col md:flex-row gap-7 md:gap-1 hidden'>
            <div className='flex flex-col justify-start items-center gap-6 flex-1'>
              <h3 className='font-bold text-gray-700'>Meet the Experts</h3>
              <Image
                className={styles.relative}
                src='/images/undraw_business_chat.svg'
                alt='undraw_business_chat'
                width={200}
                height={200}
              />
            </div>
            <div className='flex flex-col justify-start items-center gap-6 flex-1'>
              <h3 className='font-bold text-gray-700'>Signup with us</h3>
              <Image
                className={styles.relative}
                src='/images/undraw_business_deal_re_up4u.svg'
                alt='undraw_business_deal_re_up4u'
                width={200}
                height={200}
              />
            </div>
            <div className='flex flex-col justify-start items-center gap-6 flex-1'>
              <h3 className='font-bold text-gray-700'>Finalize Design</h3>
              <Image
                className={styles.relative}
                src='/images/undraw_interior_design.svg'
                alt='undraw_interior_design'
                width={200}
                height={200}
              />
            </div>
            <div className='flex flex-col justify-start items-center gap-6 flex-1'>
              <h3 className='font-bold  text-gray-700'>Execution</h3>
              <Image
                className={styles.relative}
                src='/images/undraw_complete_design_re_h75h.svg'
                alt='undraw_complete_design_re_h75h.jpg'
                width={200}
                height={200}
              />
            </div>
            <div className='flex flex-col justify-start items-center gap-6 flex-1'>
              <h3 className='font-bold  text-gray-700'>Move in</h3>
              <Image
                className={styles.relative}
                src='/images/undraw_conversation.svg'
                alt='etienne-beauregard-riverin-unsplash.jpg'
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className='md:w-full w-4/5 mx-auto text-right mt-4 md:mt-8'>
            <Link className='text-sm font-semibold hover:underline hover:underline-offset-4' href='/how-we-work'>
              learn more
            </Link>
          </div>
        </div>
      </section>
      <section className='w-4/5 mx-auto my-6 md:my-32'>
        <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-36 md:mb-32 text-center md:text-left'>
          Our Projects
        </h2>
        <div className='row flex flex-col md:flex-row justify-between mb-4'>{featured}</div>
        <div className='mt-4 text-right'>
          <Link className='text-base font-semibold hover:underline hover:underline-offset-4' href='/projects'>
            see all
          </Link>
        </div>
      </section>
      <section className='w-11/12 max-w-5xl mx-auto my-6 md:my-36'>
        <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-20 md:mb-32 text-center md:text-left w-full md:w-1/2 hidden md:block'>
          Find Out What Our Clients Say About Us
        </h2>
        <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold mt-20 md:mb-32 text-center md:text-left w-full md:w-1/2 md:hidden'>
          Testimonials
        </h2>
        <Testimonial data={testimonials}></Testimonial>
      </section>
    </main>
  );
}
