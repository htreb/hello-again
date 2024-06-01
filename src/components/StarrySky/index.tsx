import { useEffect, useState } from 'react';
import { getParallaxPosition } from '@/app/utils';

type Star = { top: number; left: number; size: number };

interface StarrySkyProps {
  n: number;
  maxSize: number;
  offset: number;
}

export default function StarrySky({ n, maxSize, offset }: StarrySkyProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: n }).map(() => {
      const size = Math.random() * maxSize + 1; // Random size between 1 and maxSize
      const top = Math.random() * 100; // Random top position percentage
      const left = Math.random() * 100; // Random left position percentage
      return { top, left, size };
    });
    setStars(newStars);
  }, [n, maxSize]);

  return (
    <div
      className='h-full w-full absolute'
      style={getParallaxPosition({ width: 100, moveY: 0.4 }, offset)}
    >
      {stars.map(({ top, left, size }, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: size,
            height: size,
            backgroundColor: 'white',
            borderRadius: '50%'
          }}
        />
      ))}
    </div>
  );
}
