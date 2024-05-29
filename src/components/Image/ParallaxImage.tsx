import Image from 'next/image';
import { ImageType, ImgData } from '@/components/Image/resources';

export type ImageComponentProps = {
  img: ImageType;
  offset: number;
};

export default function ParallaxImage({ img, offset }: ImageComponentProps) {
  const pos = ImgData[img];
  const movement = pos.movement * offset;

  return (
    <Image
      src={ImgData[img].src}
      alt={img}
      width={pos.width * 10}
      height={pos.width * 10}
      style={{
        position: 'absolute',
        transform: `
        translate(${img === 'Spaceship' ? `${movement}px` : 0}, ${movement}px)
        ${pos.rotate ? `rotate(${(pos.rotate * movement) / 10}deg)` : ''}`,
        width: `${pos.width}%`,
        top: pos.top !== undefined ? `${pos.top}%` : '',
        right: pos.right !== undefined ? `${pos.right}%` : '',
        bottom: pos.bottom !== undefined ? `${pos.bottom}%` : '',
        left: pos.left !== undefined ? `${pos.left}%` : '',
        zIndex: pos.zIndex
      }}
    />
  );
}
