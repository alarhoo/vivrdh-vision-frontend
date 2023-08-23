import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import styles from '../../app/styles.module.css';

const Quote = (props) => {
  const { header } = props;
  return (
    <div>
      <h1 className='text-2xl md:text-3xl font-bold  text-center'>{header}</h1>
      <blockquote className={`${styles.blockquote}`}>
        <ImQuotesLeft color='#E5E5E5' className='w-16 h-14 absolute -z-10 top-12' />
        <div className='text-xl italic font-semibold'>{props.children}</div>
      </blockquote>
    </div>
  );
};

export default Quote;
