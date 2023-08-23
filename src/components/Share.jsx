'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill, RiWhatsappFill } from 'react-icons/ri';
import Heading from './shared/Heading';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Share = () => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // const [currentUrl, setCurrentUrl] = useState(null);

  // const router = useRouter();
  // useEffect(() => {
  //   const url = `${pathname}?${searchParams}`;
  //   // You can now use the current URL
  //   // ...
  // }, [pathname, searchParams]);

  let href = '';
  if (typeof window !== 'undefined') {
    href = window.location.href;
  }
  const shareUrl = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${href}`,
    twitter: `https://twitter.com/intent/tweet?url=${href}`,
    linkedin: `https://www.linkedin.com/shareArticle/?mini=true&url=${href}`,
    whatsapp: `whatsapp://send?text=Checkout this Vision Project!%0A%0A${href}`,
  };
  return (
    <div className='flex flex-row items-center justify-end gap-5'>
      <a href={shareUrl.facebook} target='_blank' rel=' noreferrer' title='Share to Facebook'>
        <RiFacebookFill className='text-xl' />
      </a>
      <a href={shareUrl.twitter} target='_blank' rel=' noreferrer' title='Share to Twitter'>
        <RiTwitterFill className='text-xl' />
      </a>
      <a href={shareUrl.linkedin} target='_blank' rel=' noreferrer' title='Share to LinkedIn'>
        <RiLinkedinFill className='text-xl' />
      </a>
      <a href={shareUrl.whatsapp} target='_blank' rel=' noreferrer' title='Share to WhatsApp'>
        <RiWhatsappFill className='text-xl' />
      </a>
    </div>
  );
};

export default Share;
