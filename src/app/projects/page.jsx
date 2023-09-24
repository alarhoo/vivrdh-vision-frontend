import React from 'react';
import Heading from '../../components/shared/Heading';
import Projects from '../../components/Projects';
import { fetchAPI } from '../../../utils/api';

async function getData() {
  const response = await fetchAPI(`/projects?filters[status][$eq]=ongoing&populate=*`);
  return response.data;
}

const ProjectsPage = async () => {
  const projects = await getData();

  return (
    <main className='relativez'>
      <section className='container mx-auto'>
        <div className='my-36'>
          <h1 className='logo-text text-4xl uppercase tracking-widest mb-3'>
            Our <span className='logo-color'>Projects</span>{' '}
          </h1>
          <Projects data={projects} />
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
