'use client';
import React from 'react';
import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { getStrapiMedia } from '../../../utils/media';

const Mansory = ({ project }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter='10px'>
        {project.gallery.data.map((item, i) => {
          return (
            <Image
              key={i}
              className='transition-shadows shadow-none'
              src={getStrapiMedia(item.attributes.url)}
              data-te-img={getStrapiMedia(item.attributes.url)}
              alt={item.attributes.alternativeText ? item.attributes.alternativeText : 'Vision Project Image Gallery'}
              width='1920'
              height='1080'
            />
          );
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default Mansory;
