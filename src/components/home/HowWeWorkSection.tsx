import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles.module.css';

const HowWeWorkSection = () => {
  return (
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
  );
};

export default HowWeWorkSection;
