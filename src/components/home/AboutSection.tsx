import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section id='about-section' className='bg-gray-50 py-32'>
      <div className='container mx-auto'>
        <h2 className='logo-text text-4xl uppercase tracking-widest'>
          About <span className='logo-color'>Vision</span>{' '}
        </h2>
        <div className='flex flex-col md:flex-row gap-2'>
          <div className='flex-1'>
            <p
              className='text-xl my-8 text-zinc-600'
              data-te-animation-init
              data-te-animation-start='onScroll'
              data-te-animation='[fade-in_1s_ease-in-out]'
            >
              We offer our customers the best possible experience by constantly innovating and creating new solutions.
            </p>
            <div className='flex flex-col md:flex-row gap-5'>
              <p
                className='flex-1 text-zinc-500'
                data-te-animation-init
                data-te-animation-start='onScroll'
                data-te-animation='[fade-in-left_1s_ease-in-out]'
              >
                Our services transcend the ordinary, encompassing a comprehensive spectrum of elements meticulously
                tailored for our esteemed clients. This encompasses design, manufacturing, installation, and project
                management, reflecting our extensive portfolio of successfully accomplished projects throughout South
                India.
              </p>
              <p
                className='flex-1 text-zinc-500'
                data-te-animation-init
                data-te-animation-start='onScroll'
                data-te-animation='[fade-in-right_1s_ease-in-out]'
              >
                We possess the art of transforming our clients&apos; visions and lifestyles into an unparalleled way of
                life - be it within their living spaces or work environments - imbued with an individualized touch that
                harmoniously resonates with their desires and essences.
              </p>
            </div>
          </div>
          {/* <div className="flex-1">
            <div className="relative h-full" data-te-animation-init data-te-animation-start="onScroll" data-te-animation="[fade-in_1s_ease-in-out]">
              <Image src="/images/man-office.webp" alt="About Us" fill className="object-contain"></Image>
            </div>
          </div> */}
          <div className='flex-1 mt-16 md:my-0'>
            <article className='flex justify-center items-center youtube-section h-full max-w-full md:max-w-[90%] mx-auto'>
              <div className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden pt-[57%]'>
                <iframe
                  className='embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full'
                  src='https://www.youtube.com/embed/1uFn6OU-bF8?si=oGZRF7p0E-Vw--d6'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  data-gtm-yt-inspected-2340190_699='true'
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
