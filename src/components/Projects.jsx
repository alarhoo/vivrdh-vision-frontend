'use client';
import React, { useState } from 'react';
import ImageBlock from '../components/shared/ImageBlock';
import { getStrapiMedia } from '../../utils/media';
import { fetchAPI } from '../../utils/api';

const Projects = ({ data }) => {
  const [projects, setProjects] = useState(data);
  const projectsHtml = projects.map(({ id, attributes }, i) => {
    const slug = `${attributes.name.toLowerCase().replace(' ', '-')}-at-${attributes.location.city
      .toLowerCase()
      .replace(' ', '-')}`;
    return (
      <ImageBlock
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
        {/* <Link href={`projects/${attributes.pid}/${attributes.name}`}>
        <h2 className='font-bold text-neutral-800 text-xl md:text-2xl'>{attributes.name}</h2>
      </Link> */}
        <p>
          {attributes.dimension.toLocaleString('en')} {attributes.dimension_unit}
        </p>
      </ImageBlock>
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
      <div id='filter' className='flex justify-start items-start'>
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
      {projectsHtml}
    </>
  );
};

export default Projects;
