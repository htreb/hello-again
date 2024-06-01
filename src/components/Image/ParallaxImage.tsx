import Image from 'next/image';
import { ImageType, ImgData } from '@/components/Image/resources';
import { getParallaxPosition } from './utils';

export type ImageComponentProps = {
  img: ImageType;
  offset: number;
};

export default function ParallaxImage({ img, offset }: ImageComponentProps) {
  const pos = ImgData[img];

  return (
    <Image
      src={ImgData[img].src}
      alt={img}
      width={pos.width * 10}
      height={pos.width * 10}
      style={getParallaxPosition(ImgData[img], offset)}
    />
  );
}
