'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Animate, Carousel, SmoothScroll, initTE } = await import('tw-elements');
      initTE({ Offcanvas, Animate, Carousel, SmoothScroll });
    };
    init();
  }, []);
  return (
    <header>
      <nav
        className='navbar navbar-expand-lg shadow-md bg-white relative flex items-center w-full justify-between'
        data-te-navbar-ref
      >
        <div className='w-[inherit] mx-auto flex flex-wrap items-center justify-between p-5'>
          <div className='flex items-center'>
            <Link className='navbar-brand logo' href='/'>
              <h1 className='mb-0 font-semibold leading-normal'>Vision Creations</h1>
            </Link>
          </div>
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

          {/* <button
            className='navbar-toggler border-0 py-3 lg:hidden leading-none text-4xl mr-2'
            type='button'
            data-te-collapse-init
            data-te-target='#navbarSupportedContentX'
            aria-controls='navbarSupportedContentX'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <CgMenuRight />
          </button> */}

          <div
            className='!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContentX'
            data-te-collapse-item
          >
            <ul
              className='navbar-nav mr-auto lg:flex lg:flex-row w-full justify-end text-right logo-color'
              data-te-navbar-nav-ref
            >
              <li className='nav-item' data-te-nav-item-ref>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold text-whites hover:underline hover:underline-offset-4'
                  href='/projects'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  projects
                </Link>
              </li>
              <li className='nav-item' data-te-nav-item-ref>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold text-whites hover:underline hover:underline-offset-4'
                  href='/services'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  services
                </Link>
              </li>
              <li className='nav-item' data-te-nav-item-ref>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold text-whites hover:underline hover:underline-offset-4'
                  href='/contact'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  contact
                </Link>
              </li>
              <li className='nav-item' data-te-nav-item-ref>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold text-whites hover:underline hover:underline-offset-4'
                  href='/careers'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  careers
                </Link>
              </li>
              <li className='nav-item' data-te-nav-item-ref>
                <Link
                  className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold text-whites hover:underline hover:underline-offset-4'
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
        <div
          className='invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] h-fit flex h-2/5s lg:h-1/3s max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none'
          tabIndex={-1}
          id='offcanvasTop'
          aria-labelledby='offcanvasTopLabel'
          data-te-offcanvas-init
        >
          <div className='flex items-center justify-between p-6'>
            <h5 className='mb-0 font-semibold leading-normal logo' id='offcanvasTopLabel'>
              Vision Creations
            </h5>
            <button
              type='button'
              title='close'
              className='box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none pr-1'
              data-te-offcanvas-dismiss
            >
              <span className='w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </span>
            </button>
          </div>
          <ul
            className='navbar-nav mr-auto lg:flex lg:flex-row w-full justify-end text-right px-5 pb-5 logo'
            data-te-navbar-nav-ref
          >
            <li className='nav-item' data-te-nav-item-ref data-te-offcanvas-dismiss>
              <Link
                className='nav-link block pr-2 lg:px-2 py-2 text-base font-semibold text-whites hover:underline hover:underline-offset-4'
                href='/projects'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                projects
              </Link>
            </li>
            <li className='nav-item' data-te-nav-item-ref data-te-offcanvas-dismiss>
              <Link
                className='nav-link block pr-2 lg:px-2 py-2 text-base font-semibold text-whites hover:underline hover:underline-offset-4'
                href='/services'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                services
              </Link>
            </li>
            <li className='nav-item' data-te-nav-item-ref data-te-offcanvas-dismiss>
              <Link
                className='nav-link block pr-2 lg:px-2 py-2 text-base font-semibold text-whites hover:underline hover:underline-offset-4'
                href='/contact'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                contact
              </Link>
            </li>
            <li className='nav-item' data-te-nav-item-ref data-te-offcanvas-dismiss>
              <Link
                className='nav-link block pr-2 lg:px-2 py-2 text-base font-semibold text-whites hover:underline hover:underline-offset-4'
                href='/careers'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                careers
              </Link>
            </li>
            <li className='nav-item' data-te-nav-item-ref data-te-offcanvas-dismiss>
              <Link
                className='nav-link block pr-2 lg:px-2 py-2 text-base font-semibold text-whites hover:underline hover:underline-offset-4'
                href='/about'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
