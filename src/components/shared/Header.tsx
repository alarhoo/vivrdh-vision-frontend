'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';

const Header = () => {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Collapse, Animate, Carousel, Lightbox, SmoothScroll, initTE } = await import('tw-elements');
      initTE({ Offcanvas, Collapse, Animate, Carousel, Lightbox, SmoothScroll });
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
      {/* <nav className='container m-auto flex justify-between items-center p-2 text-white'>
        <Link href='/'>
          <h1 className={`text-2xl lg:text-4xl ${textColor} logo-text logo-color font-bold tracking-[5px]`}>VISION</h1>
        </Link>
        <ul className={`hidden lg:text-xl sm:flex ${textColor}`}>
          <li className='p-4'>
            <Link href='/pro jects' className='hover:underline hover:underline-offset-4'>
              Projects
            </Link>
          </li>

          <li className='p-4'>
            <Link href='/about' className='hover:underline hover:underline-offset-4'>
              About
            </Link>
          </li>

          <li className='p-4'>
            <Link href='/contact' className='hover:underline hover:underline-offset-4'>
              Contact
            </Link>
          </li>

          <li className='p-4'>
            <Link href='/career' className='hover:underline hover:underline-offset-4'>
              Career
            </Link>
          </li>
        </ul>

        <button
          className='border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden'
          type='button'
          data-te-collapse-init
          data-te-target='#navbarSupportedContentX'
          aria-controls='navbarSupportedContentX'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <CgMenuRight size={20} />
        </button>
        <div
          className='absolute top-0 right-0 bottom-0 left-0 lg:!flex justify-center items-center w-full h-screen bg-black ease-in duration-300 !visible hidden'
          data-te-collapse-item
        >
          <ul data-te-navbar-nav-ref>
            <li className='p-4 text-4xl hover:text-gray-500' data-te-nav-item-ref>
              <Link href='/projects' data-te-nav-link-ref>
                Projects
              </Link>
            </li>

            <li className='p-4 text-4xl hover:text-gray-500' data-te-nav-item-ref>
              <Link href='/about' data-te-nav-link-ref>
                About
              </Link>
            </li>

            <li className='p-4 text-4xl hover:text-gray-500' data-te-nav-item-ref>
              <Link href='/contact' data-te-nav-link-ref>
                Contact
              </Link>
            </li>

            <li className='p-4 text-4xl hover:text-gray-500' data-te-nav-item-ref>
              <Link href='/career' data-te-nav-link-ref>
                Career
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* <nav
        className='relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start'
        data-te-navbar-ref
      >
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          <div className='flex items-center'>
            <button
              className='border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden'
              type='button'
              data-te-collapse-init
              data-te-target='#navbarSupportedContentX'
              aria-controls='navbarSupportedContentX'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='[&>svg]:w-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-7 w-7'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </span>
            </button>
          </div>

          <div
            className='!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentX'
            data-te-collapse-item
          >
            <ul className='mr-auto flex flex-col lg:flex-row' data-te-navbar-nav-ref>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Home
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Features
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  Pricing
                </a>
              </li>
              <li className='mb-2 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90'
                  href='#!'
                  data-te-nav-link-ref
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav
        className='navbar navbar-expand-lg container m-auto flex justify-between items-center p-0 text-white'
        data-te-navbar-ref
      >
        <div className='w-[inherit] mx-auto flex flex-wrap items-center justify-between p-3'>
          <Link href='/'>
            <h1 className={`text-2xl lg:text-4xl ${textColor} logo-text logo-color font-bold tracking-[5px]`}>
              VISION
            </h1>
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
            <CgMenuRight />
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
                  href='/projects'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Projects
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/about'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  About
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/contact'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  Contact
                </Link>
              </li>
              <li className='nav-item p-4' data-te-nav-item-ref>
                <Link
                  className='nav-link hover:underline hover:underline-offset-4'
                  href='/careers'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
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
                <h1 className={`text-2xl lg:text-4xl ${textColor} logo-text logo-color font-bold tracking-[5px]`}>
                  VISION
                </h1>
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
              className='navbar-nav mr-auto lg:flex lg:flex-row w-full justify-end text-right px-5 pb-5 logo'
              data-te-navbar-nav-ref
            >
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/projects'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  projects
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/contact'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  contact
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
                  href='/careers'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  careers
                </Link>
              </li>
              <li className='nav-item border-b border-gray-200' data-te-nav-item-ref data-te-offcanvas-dismiss>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-base tracking-wide hover:underline hover:underline-offset-4 uppercase'
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
