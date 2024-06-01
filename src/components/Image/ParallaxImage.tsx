import Image from 'next/image';
import { ImageType, ImgData } from '@/components/Image/resources';
import { getParallaxPosition } from '@/app/utils';

export type ImageComponentProps = {
  img: ImageType;
  offset: number;
};

export default function ParallaxImage({ img, offset }: ImageComponentProps) {
  return (
    <Image
      src={ImgData[img].src}
      alt={img}
      width={500}
      height={500}
      style={getParallaxPosition(ImgData[img], offset)}
    />
  );
}
