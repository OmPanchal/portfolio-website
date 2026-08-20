import React from 'react';

const AboutStatsRow = ({colour, name, description}) => {
  return (
    <div className='flex sm:flex-row flex-col items-start my-2'>
      <p className={`sm:text-4xl text-2xl font-bold opacity-75`} style={{ color: colour }}>
        {name}
        {description && ':'}
      </p>
      <p className={`sm:text-4xl font-bold text-2xl`}>{description}</p>
    </div>
  );
};

export default AboutStatsRow;
