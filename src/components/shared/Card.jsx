import Image from 'next/image';
import React from 'react';

const Card = ({ src, title, subtitle = '', children }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg min-w-[300px]'>
        {src ? (
          <Image
            className='w-full h-28 md:h-full object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg'
            src={src}
            alt='{image.alt}'
            width={100}
            height={50}
          />
        ) : (
          ''
        )}

        <div className='p-4 md:p-6 flex flex-col justify-start'>
          <div className='text-gray-900 text-2xl font-bold'>{title}</div>
          <div className='text-gray-700 text-base font-medium mb-2 md:mb-4'>{subtitle}</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
