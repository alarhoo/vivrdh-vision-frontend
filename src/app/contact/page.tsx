import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Vision Creations',
  description: 'Vision Creations, we design your dream',
};

const ContactPage = () => {
  return (
    <main className='min-h-screen'>
      <div className='flex flex-col md:flex-row'>
        <div className='left flex-1'>
          <div className='content relative w-full h-48 md:h-screen'>
            <Image
              className='object-cover'
              src='/images/contact-us-unsplash.jpg'
              alt='contact-us'
              fill
              priority={false}
            />
          </div>
        </div>
        <div className='right flex-1'>
          <div className='content m-8 md:m-14'>
            <h1 className='text-4xl font-bold my-16'>Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
