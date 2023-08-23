'use client';
import React, { useEffect, useState } from 'react';
import Card from './shared/Card';
import Heading from './shared/Heading';
import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../../utils/api';
import { getStrapiMedia } from '../../utils/media';

const CareersCardList = () => {
  const [careers, setCareers] = useState([{}]);

  async function getCareersData() {
    const response = await fetchAPI('/careers?filters[active][$eq]=true&populate=*');
    setCareers(response.data);
  }
  useEffect(() => {
    getCareersData();
  }, []);

  return (
    <>
      <Heading variant={'h2'} wrapperClass='text-center'>
        Open Positions
      </Heading>
      <div className='flex flex-col justify-center md:flex-row flex-nowrap md:flex-wrap my-9 gap-5'>
        {careers.length > 0 &&
          careers.map((career, i) => {
            return (
              <Card
                key={i}
                title={career.attributes?.title}
                subtitle={career.attributes?.subtitle}
                src={getStrapiMedia(career.attributes?.banner?.data?.attributes?.url)}
              >
                <ReactMarkdown>{career.attributes?.description}</ReactMarkdown>
                <a
                  className='py-4 underline text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                  href='mailto:hiring@vision.com'
                >
                  Send resume
                </a>
              </Card>
            );
          })}
        {careers.length === 0 && <p>No openings as of now. Please contact us for more!</p>}
      </div>
    </>
  );
};

export default CareersCardList;
