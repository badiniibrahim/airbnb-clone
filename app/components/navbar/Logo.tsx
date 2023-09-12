'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo: FC = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push('/')}
      src={'/images/logo.png'}
      alt="logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
    />
  );
};

export default Logo;
