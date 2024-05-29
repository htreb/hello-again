'use client';

import { useEffect, useMemo, useState } from 'react';
import ParallaxImage from '@/components/Image/ParallaxImage';
import { ImageType } from '@/components/Image/resources';
import StarrySky from '../StarrySky';

export default function SpaceScene() {
  const [offset, setOffset] = useState(window.scrollY);

  const imageItems: ImageType[] = useMemo(
    () => ['Moon', 'Spaceship', 'Planet', 'Alien', 'Earth', 'Astronaut'],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    handleScroll(); // Force an initial update
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className='w-full relative overflow-hidden'
      style={{ height: '200vh' }}
    >
      <StarrySky n={100} maxSize={6} />
      <div className='h-screen w-screen relative flex items-center justify-center'>
        <div
          className='text-8xl text-center'
          style={{ textShadow: '1px 1px 3px black' }}
        >
          HELLO AGAIN
        </div>
        {imageItems.map((image) => (
          <ParallaxImage key={image} img={image} offset={offset} />
        ))}
      </div>
      <div className='h-20 w-full absolute bottom-0 bg-gradient-to-t from-black to-transparent' />
    </section>
  );
}
