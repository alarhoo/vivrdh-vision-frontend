'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import Image from 'next/image';

const Header = () => {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Collapse, Animate, Carousel, Lightbox, SmoothScroll, Input, initTE } = await import(
        'tw-elements'
      );
      initTE({ Offcanvas, Collapse, Animate, Carousel, Lightbox, SmoothScroll, Input });
    };
    init();

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('bg-white');
        setTextColor('text-gray-800');
      } else {
        setColor('transparent');
        setTextColor('text-white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <header className={`fixed left-0 top-0 w-full z-10 ease duration-300 ${color} border-bs border-b-[#f4f4f4]s`}>
      <nav
        className='navbar navbar-expand-lg container m-auto flex justify-between items-center p-0 text-white'
        data-te-navbar-ref
      >
        <div className='w-[inherit] mx-auto flex flex-wrap items-center justify-between p-3'>
          <Link href='/'>
            {/* <h1 className={`text-2xl lg:text-4xl ${textColor} logo-text logo-color font-bold tracking-[5px]`}>
              VISION
            </h1> */}
            <Image src='/images/logo.jpg' width={200} height={40} alt='Vision Logo' priority={true} />
          </Link>
          <button
            type='button'
            title='Menu'
            data-te-offcanvas-toggle
            data-te-target='#offcanvasTop'
            aria-controls='offcanvasTop'
            data-te-ripple-init
            data-te-ripple-color='light'
            className='lg:hidden'
          >
            <CgMenuRight size={20} color='#9b9b9b' />
          </button>

          <div
            className='!visible hidden grow basis-[100%] justify-end items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentX'
            data-te-collapse-item
          >
            <ul className={`hidden lg:text-xl sm:flex ${textColor}`} data-te-navbar-nav-ref>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/#about-section'
                  data-te-smooth-scroll-init
                >
                  About
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/#services-section'
                  data-te-smooth-scroll-init
                  data-te-offset='25'
                >
                  Services
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link className='nav-link hover:underline hover:underline-offset-4' href='/projects'>
                  Projects
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/#contact-section'
                  data-te-smooth-scroll-init
                  data-te-offset='25'
                >
                  Contact
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link className='nav-link hover:underline hover:underline-offset-4' href='/careers'>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className='invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] h-fit flex h-2/5s lg:h-1/3s max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none rounded-lg'
          tabIndex={-1}
          id='offcanvasTop'
          aria-labelledby='offcanvasTopLabel'
          data-te-offcanvas-init
        >
          <div className='container mx-auto'>
            <div className='flex items-center justify-between p-4'>
              <Link href='/'>
                {/* <h1 className={`text-2xl lg:text-4xl ${textColor} logo-text logo-color font-bold tracking-[5px]`}>
                  VISION
                </h1> */}
                <Image src='/images/logo.jpg' width={200} height={40} alt='Vision Logo' priority={true} />
              </Link>
              <button
                type='button'
                title='close'
                className='box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none pr-1'
                data-te-offcanvas-dismiss
              >
                <CgClose size={20} />
              </button>
            </div>
            <ul
              className='navbar-nav mr-auto lg:flex lg:flex-row w-full justify-end text-right px-5 py-8 logo'
              data-te-navbar-nav-ref
            >
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-4 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/projects'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  projects
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-4 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/contact'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  contact
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-4 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/careers'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  careers
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-4 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/about'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  about
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
