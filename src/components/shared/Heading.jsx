import React from 'react';

const Heading = ({ variant = 'h1', wrapperClass = '', div = false, children }) => {
  let className = wrapperClass;
  switch (variant) {
    case 'h1':
      className += ` font-bold leading-tight text-5xl m-0 text-neutral-900`;
      break;
    case 'h2':
      className += ` font-bold leading-tight text-4xl m-0 text-neutral-700`;
      break;
    case 'h3':
      className += ` font-bold leading-tight text-3xl m-0 text-neutral-600`;
      break;
    case 'h4':
      className += ` font-medium leading-tight text-2xl m-0 text-neutral-600`;
      break;
    case 'h5':
      className += ` font-medium leading-tight text-xl m-0 text-neutral-600`;
      break;
    case 'h6':
      className += ` font-medium leading-tight text-base m-0 text-neutral-600`;
      break;
    default:
      className += ` font-bold leading-tight text-5xl m-0 text-neutral-600`;
      break;
  }
  return (
    <>
      {div ? (
        variant == 'h1' ? (
          <div className={className}>{children}</div>
        ) : variant == 'h2' ? (
          <div className={className}>{children}</div>
        ) : variant == 'h3' ? (
          <div className={className}>{children}</div>
        ) : variant == 'h4' ? (
          <div className={className}>{children}</div>
        ) : variant == 'h5' ? (
          <div className={className}>{children}</div>
        ) : (
          <div className={className}>{children}</div>
        )
      ) : variant == 'h1' ? (
        <h1 className={className}>{children}</h1>
      ) : variant == 'h2' ? (
        <h2 className={className}>{children}</h2>
      ) : variant == 'h3' ? (
        <h3 className={className}>{children}</h3>
      ) : variant == 'h4' ? (
        <h4 className={className}>{children}</h4>
      ) : variant == 'h5' ? (
        <h5 className={className}>{children}</h5>
      ) : (
        <h6 className={className}>{children}</h6>
      )}
    </>
  );
};

export default Heading;
