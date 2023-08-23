import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ImageBlock = (props) => {
  const { header, subheader, image, href = '', direction = 'start', wrapperClass = '', imgClass = '' } = props;
  let flexDirection = '';
  if (direction == 'end') {
    flexDirection = '-reverse';
  }
  return (
    <div className={`img-block flex flex-col md:flex-row${flexDirection} ${wrapperClass}`}>
      <div className='md:flex-row-reverse'></div>
      <div className='md:flex-col-reverse'></div>
      <div className='md:flex-row'></div>
      <div className='md:flex-col'></div>
      <div className='left'>
        <div className='content'>
          {href ? (
            <Link className='' href={href}>
              <Image
                className={`${imgClass}`}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </Link>
          ) : (
            <Image
              className={`${imgClass}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          )}
        </div>
      </div>
      <div className={`right flex flex-1 items-center justify-${direction}`}>
        <div className={`content p-8 text-${direction}`}>
          {href ? (
            <Link className='' href={href}>
              <div className='font-bold text-neutral-800 text-xl md:text-2xl'>{header}</div>
            </Link>
          ) : (
            <div className='font-bold text-neutral-800 text-xl md:text-2xl'>{header}</div>
          )}
          <div className='font-semibold text-base text-neutral-700 mb-5 md:mb-8'>{subheader}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
