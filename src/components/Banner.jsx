import Image from 'next/image';
import React from 'react';

const Banner = ({ src, wrapperClass = '', fullscreen = false, children = <></> }) => {
  return (
    <>
      {fullscreen ? (
        <div className={`relative w-full h-[calc(100vh_-_64px)] md:h-[calc(100vh_-_52px)] ${wrapperClass}`}>
          <Image className='w-full object-cover' src={src} alt='{image.alt}' fill priority={true} />
        </div>
      ) : (
        <div className={`relative w-full h-[calc(60vh_-_75px)] md:h-[60vh] ${wrapperClass}`}>
          <Image className='w-full object-cover' src={src} alt='{image.alt}' fill priority={true} />
        </div>
      )}
      {Object.entries(children.props).length !== 0 ? (
        <div className='absolute top-20 right-0 bottom-0 left-0'>{children}</div>
      ) : (
        ''
      )}
    </>
  );
};

export default Banner;
