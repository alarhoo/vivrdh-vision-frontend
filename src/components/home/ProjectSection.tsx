import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/app/styles.module.css';
import { fetchAPI } from '../../../utils/api';
import { getStrapiMedia } from '../../../utils/media';

const ProjectSection = async () => {
  const feat = await fetchAPI('/projects?filters[featured][$eq]=True&populate=*');
  const featured = feat?.data.map((item: any, i: number) => {
    const slug = `${item.attributes.name.toLowerCase().replace(' ', '-')}-at-${item.attributes.location.city
      .toLowerCase()
      .replace(' ', '-')}`;
    const classes = i % 2 ? 'w-full md:w-3/5 mt-10s md:ml-[40%] md:-mt-36' : 'w-full md:w-1/3 mt-4s md:-mt-24s h-fit';
    return (
      <figure key={i} className={classes}>
        <Link href={`/projects/${item.id}/${slug}`}>
          <Image
            className={`${styles.relative}`}
            src={getStrapiMedia(item.attributes.banner.data.attributes.url)}
            alt='project banner'
            fill
          />
        </Link>
        <figcaption className='font-bold'>
          {item.attributes.name} at {item.attributes.location.city}
        </figcaption>
        <figcaption className='text-grey'>
          {item.attributes.dimension.toLocaleString('en')} {item.attributes.dimension_unit}
        </figcaption>
      </figure>
    );
  });

  return (
    <section className='w-4/5 mx-auto my-6 md:my-32'>
      <h2 className='text-3xl md:text-4xl lg:text-4xl font-bold my-10 md:mb-32 text-center md:text-left'>
        Our Projects
      </h2>
      <div className='row flex flex-col md:flex-rows justify-between my-4 gap-10'>{featured}</div>
      <div className='mt-4 text-right'>
        <Link className='text-base font-semibold hover:underline hover:underline-offset-4' href='/projects'>
          see all
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
