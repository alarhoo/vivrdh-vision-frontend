import React from 'react';
import { fetchAPI } from '../../../../utils/api';
import { getStrapiMedia } from '../../../../utils/media';
import Banner from '../../../components/Banner';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import Share from '../../../components/Share';
import Mansory from '../../../components/shared/Mansory';

export const metadata = {
  title: 'Projects | Vision Creations',
  description: 'Projects developed by Vision Creations',
};

const Project = async ({ params }) => {
  const slug = params.slug;
  const response = await fetchAPI(`/projects/${slug[0]}?populate=*`);
  const project = response.data.attributes;

  if (project) {
    const link = project.yt_link ? project.yt_link.split('/').pop() : null;
    return (
      <>
        <Banner
          src={getStrapiMedia(project.banner.data.attributes.url)}
          wrapperClass='transition-all duration-300 filter grayscale-0 hover:grayscale-0 mb-4'
        ></Banner>
        <main className=''>
          <div id='project-overview' className='w-9/12 mx-auto'>
            <div className='project-title my-8 md:mt-10 md:mb-4 text-right'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl w-full md:w-1/2s font-bold mb-4'>{project.name}</h1>
              <div className='text-1xl md:text-1xl font-semibold text-gray-500'>
                {project.location.city}, {project.location.state}
              </div>
            </div>
            <article className='project-body mt-12 mb-24'>
              <div className='flex flex-col md:flex-row gap-5'>
                <div className='left flex-1'>
                  <div className='content h-full'>
                    <div className='flex h-full items-end'>
                      <div className='left flex-1'>
                        <div className='content'>
                          <div className='header font-bold'>Project Type</div>
                          <div className='subheader pb-6'>{project.type}</div>
                          <div className='header font-bold'>Measurement</div>
                          <div className='subheader'>
                            {project.dimension.toLocaleString('en')} {project.dimension_unit}
                          </div>
                        </div>
                      </div>
                      <div className='right flex-1'>
                        <div className='content'>
                          <div className='header font-bold'>Start Date</div>
                          <div className='subheader pb-6'>{format(new Date(project.start_date), 'MMM dd, yyyy')}</div>
                          <div className='header font-bold'>End Date</div>
                          <div className='subheader'>
                            {project.end_date ? format(new Date(project.end_date), 'MMM dd, yyyy') : 'Ongoing'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='right flex-1 mt-8'>
                  <div className='content'>
                    <ReactMarkdown>{project.description}</ReactMarkdown>
                  </div>
                </div>
              </div>
              <div className='text-right my-16'>
                <Share></Share>
              </div>
            </article>
          </div>
          {link && (
            <article className='youtube-section max-w-[90%] mx-auto'>
              <iframe
                className='mx-auto'
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${link}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </article>
          )}
          {project.gallery.data ? (
            <article className='gallery-section my-10'>
              <h2 className='text-1xl md:text-1xl font-bold mb-3 max-w-[90%] mx-auto'>Gallery</h2>
              <div className='gallery-container max-w-[90%] mx-auto'>
                <Mansory project={project} />
              </div>
            </article>
          ) : (
            ''
          )}
        </main>
      </>
    );
  }
};

export default Project;
