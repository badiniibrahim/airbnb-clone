'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src! || '/images/placeholder.jpg'}
      alt="avatar"
      className="rounded-full"
      height={20}
      width={20}
    />
  );
};

export default Avatar;
