'use client';

import React, { FC } from 'react';

interface HeadingProp {
  title: string;
  subTitle?: string;
  center?: boolean;
}

const Heading: FC<HeadingProp> = ({ title, subTitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xll font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subTitle}</div>
    </div>
  );
};

export default Heading;
