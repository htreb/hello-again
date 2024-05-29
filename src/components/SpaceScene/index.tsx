'use client';

import { useEffect, useMemo, useState } from 'react';
import ParallaxImage from '@/components/Image/ParallaxImage';
import { ImageType, ImgData } from '@/components/Image/resources';
import Image from 'next/image';
import StarrySky from '../StarrySky';

export default function SpaceScene() {
  const [offset, setOffset] = useState(0);
  const astronaut = ImgData['Astronaut'];

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageItems: ImageType[] = useMemo(
    () => ['Moon', 'Spaceship', 'Planet', 'Alien', 'Earth'],
    []
  );

  return (
    <section
      className='w-full relative overflow-hidden'
      style={{ height: '200vh' }}
    >
      <StarrySky n={100} maxSize={6} />
      <div className='h-screen w-screen w-full relative flex items-center justify-center'>
        <div className='text-8xl text-center'>HELLO AGAIN</div>
        {imageItems.map((image) => (
          <ParallaxImage key={image} img={image} offset={offset} />
        ))}
        <Image
          src={ImgData['Astronaut'].src}
          alt='Astronaut'
          width={1920}
          height={1080}
          className='fixed bottom-0 right-0'
          style={{
            width: `${astronaut.width}%`,
            top: astronaut.top !== undefined ? `${astronaut.top}%` : '',
            right: astronaut.right !== undefined ? `${astronaut.right}%` : '',
            bottom:
              astronaut.bottom !== undefined ? `${astronaut.bottom}%` : '',
            left: astronaut.left !== undefined ? `${astronaut.left}%` : '',
            zIndex: astronaut.zIndex !== undefined ? astronaut.zIndex : 0
          }}
        />
      </div>
      <div className='h-20 w-full absolute bottom-0 bg-gradient-to-t from-black to-transparent' />
    </section>
  );
}
