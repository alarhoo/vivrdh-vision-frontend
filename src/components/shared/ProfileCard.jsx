import Image from 'next/image';
import React from 'react';

const ProfileCard = ({ header, subheader, image }) => {
  return (
    <div className='relative w-full md:w-5/6'>
      <div className='w-5/6 h-4/5 bg-slate-800 absolute -z-10 -left-4 -top-4'></div>
      <Image className='w-11/12 -z-10' src={image.src} alt={image.alt} width={image.width} height={image.height} />
      <div className='absolute -bottom-8 left-1/4 right-0 px-4 py-2 bg-gray-800 opacity-70'>
        <h3 className='text-xl text-white font-bold'>{header}</h3>
        <p className='mt-2 text-sm text-gray-300'>{subheader}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
