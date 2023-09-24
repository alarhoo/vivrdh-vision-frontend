'use client';
import React, { useState } from 'react';
import ImageBlock from '../components/shared/ImageBlock';
import { getStrapiMedia } from '../../utils/media';
import { fetchAPI } from '../../utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { CgArrowRight } from 'react-icons/cg';

const Projects = ({ data }) => {
  const [projects, setProjects] = useState(data);
  const projectsHtml = projects.map(({ id, attributes }, i) => {
    const slug = `${attributes.name.toLowerCase().replace(' ', '-')}-at-${attributes.location.city
      .toLowerCase()
      .replace(' ', '-')}`;
    return (
      <figure key={i} className='group relative w-full md:w-1/2 h-80 overflow-hidden'>
        <Image
          src={getStrapiMedia(attributes.banner.data.attributes.url)}
          alt='text'
          fill
          className='object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-75'
        />
        <div
          className='w-full h-auto px-5 py-8 text-white absolute -bottom-8 group-hover:bottom-0 left-0 z-10 text-center transition-all duration-300'
          style={{
            background: 'linear-gradient(to bottom, transparent 0, rgba(0, 0, 0, .01) 2%, rgba(0, 0, 0, .75) 90%)',
          }}
        >
          <figcaption className='text-2xl tracking-[2px] uppercase mb-3'>{attributes.name}</figcaption>
          <figcaption className='text-xl tracking-wide uppercase mb-2'>
            {attributes.dimension.toLocaleString('en')} {attributes.dimension_unit}
          </figcaption>
          <div className='line w-16 h-[1px] mt-3 mb-7 mx-auto bg-opacity-20 bg-white group-hover:w-10/12 group-hover:transition-all group-hover:duration-700 group-hover:ease-in-out'></div>
          <Link href={`/projects/${id}/${slug}`} className='hidden text-center group-hover:inline-block text-5xl'>
            <CgArrowRight />
          </Link>
        </div>

        {/* <ImageBlock
          header={attributes.name}
          subheader={attributes.location.city}
          key={i}
          image={{
            src: `${getStrapiMedia(attributes.banner.data.attributes.url)}`,
            alt: `project.gallery`,
            width: '500',
            height: '450',
          }}
          direction={i % 2 ? 'start' : 'end'}
          href={`/projects/${id}/${slug}`}
          wrapperClass='my-10'
          imgClass='transition-shadows ease-in-out shadow-none hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointers'
        >
          <Link href={`projects/${attributes.pid}/${attributes.name}`}>
            <h2 className='font-bold text-neutral-800 text-xl md:text-2xl'>{attributes.name}</h2>
          </Link>
          <p>
            {attributes.dimension.toLocaleString('en')} {attributes.dimension_unit}
          </p>
        </ImageBlock> */}
      </figure>
    );
  });

  async function filter(evt) {
    const type = evt.target.dataset.type;
    const siblings = evt.target.parentElement.children;
    Array.from(siblings).forEach((elem) => {
      elem.classList.remove('underline');
    });
    evt.target.classList.add('underline');
    let url = `/projects?filters[status][$eq]=${type}&populate=*`;
    if (type === 'all') {
      url = `/projects?populate=*`;
    }
    const projects = await fetchAPI(url);
    setProjects(projects.data);
  }

  return (
    <>
      <div id='filter' className='flex justify-start items-start mb-10'>
        <div
          className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold underline underline-offset-4 hover:underline hover:underline-offset-4 cursor-pointer'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          data-type='ongoing'
          onClick={filter}
        >
          ongoing
        </div>
        <div
          className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold underline-offset-4 hover:underline hover:underline-offset-4 cursor-pointer'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          data-type='completed'
          onClick={filter}
        >
          completed
        </div>
        {/* <div
          className='nav-link block pr-2 lg:px-2 py-2 text-sm font-semibold underline-offset-4 hover:underline hover:underline-offset-4 cursor-pointer underline'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          data-type='all'
          onClick={filter}
        >
          all
        </div> */}
      </div>
      <div className='flex flex-col md:flex-row gap-5'>{projectsHtml}</div>
    </>
  );
};

export default Projects;
