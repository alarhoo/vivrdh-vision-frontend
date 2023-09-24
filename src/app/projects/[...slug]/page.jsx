import React from 'react';
import { fetchAPI } from '../../../../utils/api';
import { getStrapiMedia } from '../../../../utils/media';
import Banner from '../../../components/Banner';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import Share from '../../../components/Share';
import Mansory from '../../../components/shared/Mansory';
import Image from 'next/image';

export const metadata = {
  title: 'Projects | Vision Creations',
  description: 'Projects developed by Vision Creations',
};

export const revalidate = 60;

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
          wrapperClass='transition-all duration-300 filter grayscale-0 hover:grayscale-0 mb-0'
        ></Banner>
        <article className='project-details bg-gray-100'>
          <div className='flex items-center justify-around container mx-auto'>
            <div className='p-3 md:p-5'>
              <div className='header font-bold'>Project Type</div>
              <div className='subheader'>{project.type}</div>
            </div>
            <div className='p-3 md:p-5'>
              <div className='header font-bold'>Measurement</div>
              <div className='subheader'>
                {project.dimension.toLocaleString('en')} {project.dimension_unit}
              </div>
            </div>
            <div className='p-3 md:p-5'>
              <div className='header font-bold'>Status</div>
              <div className='subheader'>{project.status}</div>
            </div>
          </div>
        </article>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2] h-[calc(60vh_-_75px)] md:h-[60vh]'>
          <h2
            className='text-3xl md:text-4xl font-normal tracking-[5px] uppercase absolute bottom-12 w-full text-white text-center'
            data-te-animation-init
            data-te-animation-start='onLoad'
            data-te-animation='[fade-in-up_1s_ease-in-out]'
          >
            {project.name}
          </h2>
          <h3
            className='text-1xl md:text-1xl font-semibolds text-gray-200 tracking-widest uppercases absolute bottom-5 w-full text-center'
            data-te-animation-init
            data-te-animation-start='onLoad'
            data-te-animation='[fade-in-up_1s_ease-in-out]'
          >
            {project.location.city}, {project.location.state}
          </h3>
        </div>
        <main className=''>
          <div id='project-overview' className='container mx-auto'>
            {/* <div className='project-title my-8 md:mt-10 md:mb-4 text-center'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl w-full md:w-1/2s font-bold mb-2'>{project.name}</h1>
              <div className='text-1xl md:text-1xl font-semibold text-gray-500'>
                {project.location.city}, {project.location.state}
              </div>
            </div> */}
            <div className='my-6'>
              <p>
                The architecture project served as a pivotal moment for our team, presenting a unique challenge that
                pushed the boundaries of creativity and innovation. Its importance lay in its ability to showcase our
                expertise in designing sustainable, aesthetically pleasing structures that harmonized seamlessly with
                the environment. This project not only allowed us to demonstrate our commitment to excellence but also
                fueled our passion for creating spaces that inspire and endure.
              </p>

              {/* <div data-te-lightbox-init className='flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0'>
                <div className='flex h-full w-full flex-1 flex-col'>
                  <Image
                    src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp'
                    data-te-img='https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp'
                    width={100}
                    height={200}
                    alt='Table Full of Spices'
                    className='mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                  />
                  <Image
                    src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp'
                    data-te-img='https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp'
                    width={100}
                    height={200}
                    alt='Coconut with Strawberries'
                    className='w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                  />
                </div>
                <div className='flex h-full w-full flex-1 flex-col'>
                  <Image
                    src='https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp'
                    data-te-img='https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp'
                    alt='Dark Roast Iced Coffee'
                    width={100}
                    height={200}
                    className='w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                  />
                </div>
              </div> */}
            </div>
            {/* <article className='project-body mt-12 mb-24'>
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
                          <div className='header font-bold'>Status</div>
                          <div className='subheader pb-6'>{project.status}</div>
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
            </article> */}
          </div>
          {/* {link && (
            <article className='youtube-section max-w-[90%] md:max-w-[70%] mx-auto'>
              <div className='embed-responsive embed-responsive-16by9 relative w-full overflow-hidden pt-[57%]'>
                <iframe
                  className='embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full'
                  src={`https://www.youtube.com/embed/${link}`}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  data-gtm-yt-inspected-2340190_699='true'
                  allowFullScreen
                ></iframe>
              </div>
            </article>
          )} */}
          {project.gallery.data ? (
            <article className='gallery-section my-10'>
              {/* <h2 className='text-2xl md:text-3xl font-bold mb-3 max-w-[90%] mx-auto'>Project Gallery</h2> */}
              <div className='gallery-container max-w-[90%] mx-auto' data-te-lightbox-init>
                <Mansory project={project} />
              </div>
            </article>
          ) : (
            ''
          )}

          <div className='container mx-auto text-right my-16'>
            <Share></Share>
          </div>
        </main>
      </>
    );
  }
};

export default Project;
