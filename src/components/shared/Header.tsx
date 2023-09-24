'use client';
import React from 'react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('text-white');

  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Animate, Carousel, SmoothScroll, initTE } = await import('tw-elements');
      initTE({ Offcanvas, Animate, Carousel, SmoothScroll });
    };
    init();

    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('bg-white');
        setTextColor('text-black');
      } else {
        setColor('transparent');
        setTextColor('text-white');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <header className={`fixed left-0 top-0 w-full z-10 ease duration-300 ${color}`}>
      <nav className="container m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className={`text-2xl lg:text-4xl ${textColor} hover:text-gray-500 logo-text`}>Vision Creations</h1>
        </Link>
        <ul className={`hidden lg:text-xl sm:flex ${textColor}`}>
          <li className="p-4">
            <Link href="/pro jects" className="hover:underline hover:underline-offset-4">
              Projects
            </Link>
          </li>

          <li className="p-4">
            <Link href="/about" className="hover:underline hover:underline-offset-4">
              About
            </Link>
          </li>

          <li className="p-4">
            <Link href="/contact" className="hover:underline hover:underline-offset-4">
              Contact
            </Link>
          </li>

          <li className="p-4">
            <Link href="/career" className="hover:underline hover:underline-offset-4">
              Career
            </Link>
          </li>
        </ul>

        <div className="hidden z-10">
          <CgMenuRight size={20} />
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 hidden">
          <ul>
            <Link href="/projects">
              <li className="p-4 text-4xl hover:text-gray-500">Projects</li>
            </Link>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About</Link>
            </li>

            <Link href="/contact">
              <li className="p-4 text-4xl hover:text-gray-500">Contact</li>
            </Link>
            <Link href="/career">
              <li className="p-4 text-4xl hover:text-gray-500">Career</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
