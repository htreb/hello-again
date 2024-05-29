import { useMemo } from 'react';

type Star = [number, number, number];

interface StarrySkyProps {
  n: number;
  maxSize: number;
}

export default function StarrySky({ n, maxSize }: StarrySkyProps) {
  const stars: Star[] = useMemo(
    () =>
      Array.from({ length: n }).map((_, i) => {
        const size = Math.random() * maxSize + 1; // Random size between 1 and maxSize
        const top = Math.random() * 100; // Random top position percentage
        const left = Math.random() * 100; // Random left position percentage
        return [top, left, size];
      }),
    [n, maxSize]
  );
  return (
    <div className='h-full w-full absolute'>
      {stars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: star[2],
            height: star[2],
            backgroundColor: 'white',
            borderRadius: '50%',
            top: `${star[0]}%`,
            left: `${star[1]}%`
          }}
        />
      ))}
    </div>
  );
}
