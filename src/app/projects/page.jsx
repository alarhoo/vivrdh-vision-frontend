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
    <main className='w-11/12 mx-auto my-12'>
      <div className='w-10/12 md:w-full mx-auto'>
        <Heading variant={'h1'} wrapperClass='text-left '>
          Our Projects
        </Heading>
        <Projects data={projects} />
      </div>
    </main>
  );
};

export default ProjectsPage;
