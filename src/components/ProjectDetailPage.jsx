'use client';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/api';
import { getStrapiMedia } from '../../utils/media';

const ProjectDetailPage = ({ url }) => {
  console.log('url', url);
  const [project, setProject] = useState([{}]);

  async function getCareersData() {
    const response = await fetchAPI(url);
    console.log(response);
    setProject(response.data);
  }
  useEffect(() => {
    getCareersData();
  }, []);
  return <div>ProjectDetailPage</div>;
};

export default ProjectDetailPage;
