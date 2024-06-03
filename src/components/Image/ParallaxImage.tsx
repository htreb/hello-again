import { ImageData } from '@/components/Image/resources';
import { getParallaxPosition } from '@/app/utils';

export type ImageComponentProps = {
  imageData: ImageData;
  alt: string;
  offset: number;
};

export default function ParallaxImage({
  imageData,
  alt,
  offset
}: ImageComponentProps) {
  return (
    <img
      src={imageData.src}
      alt={alt}
      width={500}
      height={500}
      style={getParallaxPosition(imageData, offset)}
    />
  );
}
