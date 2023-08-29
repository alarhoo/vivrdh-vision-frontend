import React from 'react';
import ProfileCard from '../shared/ProfileCard';
import Quote from '../shared/Quote';

const VisionSection = () => {
  return (
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
                India. We possess the art of transforming our clients&apos; visions and lifestyles into an unparalleled
                way of life - be it within their living spaces or work environments - imbued with an individualized
                touch that harmoniously resonates with their desires and essences.
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
  );
};

export default VisionSection;
