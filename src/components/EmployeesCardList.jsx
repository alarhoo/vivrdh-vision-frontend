'use client';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/api';
import { getStrapiMedia } from '../../utils/media';
import Heading from './shared/Heading';
import ImageCard from './shared/ImageCard';

const EmployeesCardList = () => {
  const [employees, setEmployees] = useState([{}]);

  async function getEmployeesData() {
    const response = await fetchAPI('/employees?populate=*');
    setEmployees(response.data);
  }
  useEffect(() => {
    getEmployeesData();
  }, []);

  return (
    <>
      <Heading variant={'h2'} wrapperClass='text-center'>
        Our Team
      </Heading>
      <section className='my-12 text-gray-800 text-center '>
        <div className='team-container flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 w-11/12 mx-auto'>
          {employees.length > 0 &&
            employees.map((emp, i) => {
              return (
                <ImageCard
                  key={i}
                  title={`${emp.attributes?.first_name} ${emp.attributes?.last_name}`}
                  subtitle={`${emp.attributes?.position}`}
                  img={{ src: getStrapiMedia(emp.attributes?.photo?.data[0]?.attributes?.url), alt: '' }}
                  path={`p${i}`}
                >
                  <a href={`mailto:${emp.attributes?.email}`} title={`Mail to: ${emp.attributes?.email}`}>
                    <p>{emp.attributes?.email}</p>
                  </a>
                </ImageCard>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default EmployeesCardList;
