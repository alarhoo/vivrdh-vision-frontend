import React from 'react';
import Heading from '../../components/shared/Heading';

export const metadata = {
  title: 'How We Work | Vision Creations',
  description: 'Vision Creations, an interior design firm for all',
};

const HowWeWork = () => {
  return (
    <>
      <main className='mt-12 mb-24'>
        <div className='w-4/5 mx-auto mb-16'>
          <Heading variant={'h1'} wrapperClass='text-right mb-0'>
            How we work
          </Heading>
          <Heading variant={'h4'} wrapperClass='text-right mb-0' div>
            Elevate life through visionary design.
          </Heading>
        </div>
        <div className='w-4/5 mx-auto'>
          <div className='md:w-1/2 my-10'>
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              01
            </Heading>
            <Heading variant={'h4'} wrapperClass='pb-3' div>
              Meet the Experts
            </Heading>
            <p>
              The first step towards turning your dream home into a reality begins with a visit to our design Centers or
              by filling out the contact form on our website. Once you reach out to us, our skilled Designers will
              schedule a meeting with you. During this meeting, we will attentively listen to your requirements and
              preferences, understanding your vision for your ideal living space. Following this, our Customer
              Relationship Manager will present you with a custom design proposal and a detailed quotation for design
              service, all provided to you completely free of cost.
            </p>
          </div>
          <div
            className='md:w-1/2 my-10 text-right md:ml-[50%]'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation='[fade-in_1s_ease-in-out]'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              02
            </Heading>
            <Heading variant={'h4'} wrapperClass='pb-3' div>
              Signup with Vision Creations
            </Heading>
            <p>
              Once you are thrilled with our design proposal and quotation, it&apos;s time to officially embark on this
              exciting journey with Vision Creations. You can join us by completing the signup process, which involves
              stage wise activities and payment schedule as a formal commitment. At this point, the real drive begins!
              Our proficient design team and project team will immediately get to work, initiating site measurements and
              commencing the design development process.
            </p>
          </div>
          <div
            className='md:w-1/2 my-10'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation='[fade-in_1s_ease-in-out]'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              03
            </Heading>
            <Heading variant={'h4'} wrapperClass='pb-3' div>
              Finalize Design
            </Heading>
            <p>
              This stage is all about refining and perfecting the design to align precisely with your desires. Our
              talented designers will closely collaborate with you to create a custom proposal enriched with vivid 3D
              renderings, a diverse range of finish options, and a budget that fits your requirements. We will
              consistently fine-tune the designs based on your feedback and preferences until they match your vision
              impeccably.
            </p>
          </div>
          <div
            className='md:w-1/2 my-10 text-right md:ml-[50%]'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation='[fade-in_1s_ease-in-out]'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              04
            </Heading>
            <Heading variant={'h4'} wrapperClass='pb-3' div>
              Execution
            </Heading>
            <p>
              With the design now enhanced to perfection, it&apos;s time to bring it to life. A dedicated project
              manager will be assigned to you, providing personalized attention and support throughout the
              project&apos;s execution. Simultaneously, stage wise and scope wise necessary civil, electrical, plumbing
              work will be executed at the site as per schedule, ensuring a strong foundation for your dream home.
              Meanwhile, the modular furniture will be fabricated in our state-of-the-art factory, tailored to the exact
              specifications of your design. On completion of necessary civil work and manufacturing of modules
              completed, products will be shipped to work site. Installation of all modules will be done in all respects
              with in the time schedule.
            </p>
          </div>
          <div
            className='md:w-1/2 my-10'
            data-te-animation-init
            data-te-animation-start='onScroll'
            data-te-animation='[fade-in_1s_ease-in-out]'
            data-te-animation-on-scroll='repeat'
            data-te-animation-reset='true'
          >
            <Heading variant={'h3'} wrapperClass='mb-0' div>
              05
            </Heading>
            <Heading variant={'h4'} wrapperClass='pb-3' div>
              Move in
            </Heading>
            <p>
              The day you have been eagerly waiting for has arrived! After completing all the necessary Quality checks
              and ensuring that everything is immaculate, we hand over your home to you. Our expert team will be there
              to assist you with the final touches, accessorizing, and decorating your living space. With every detail
              attended to, it&apos;s now time for you to move into your dream home, a place that truly reflects your
              personality and aspirations. Congratulations on this remarkable journey with Vision Creations, where we
              take pride in creating living spaces that go beyond imagination.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HowWeWork;
