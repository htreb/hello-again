'use client';

import { useEffect, useMemo, useState } from 'react';
import ParallaxImage from '@/components/Image/ParallaxImage';
import {
  ImageType,
  ImgDataMobile,
  ImgDataDesktop
} from '@/components/Image/resources';
import StarrySky from '@/components/StarrySky';

export default function SpaceScene() {
  const [offset, setOffset] = useState(0);
  const [imageData, setImageData] = useState(ImgDataMobile);
  const [hasLoaded, setHasLoaded] = useState(false);

  const imageItems: ImageType[] = useMemo(
    () => ['Moon', 'Spaceship', 'Planet', 'Alien', 'Earth', 'Astronaut'],
    []
  );

  useEffect(() => {
    const getImageData = () =>
      window.innerWidth <= 550 ? ImgDataMobile : ImgDataDesktop;
    const handleResize = () => setImageData(getImageData());
    handleResize();
    window.addEventListener('resize', handleResize);

    setTimeout(() => setHasLoaded(true), 0);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Prevent default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => setOffset(window.scrollY);
    const onScroll = () => requestAnimationFrame(handleScroll);

    // Force the page to load at the top after all effects and DOM updates
    setTimeout(() => {
      window.scrollTo(0, 0);
      handleScroll(); // Force an initial update
    }, 0);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section
      className='w-full relative overflow-hidden'
      style={{ height: '250vh' }}
    >
      <StarrySky offset={offset} />
      <div className='h-screen w-screen relative flex items-center justify-center'>
        <div
          className='text-9xl text-center'
          style={{
            textShadow: '1px 1px 5px black'
          }}
        >
          HELLO AGAIN
        </div>
        {imageItems.map((image) => {
          const img = imageData[image];
          return (
            <ParallaxImage
              key={image}
              imageData={img}
              alt={image}
              offset={offset}
            />
          );
        })}
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-1000 ${
          hasLoaded ? 'opacity-0' : ' opacity-100'
        }`}
      />
    </section>
  );
}
