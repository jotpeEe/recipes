import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Frame } from '@/components/ui/frame';

type TRecipeImages = {
  images: {
    imageUrl: string;
    alt: string;
  }[];
};
export const RecipeImages = ({ images }: TRecipeImages) => (
  <Carousel>
    <CarouselContent>
      {images.map((image, index) => (
        <CarouselItem key={`image-${index}`}>
          <div className="w-full rounded-2xl bg-clip-border">
            <Frame size="sm">
              <div className="relative aspect-video">
                <Image
                  src={image.imageUrl!}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Frame>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-left-4" />
    <CarouselNext className="-right-4" />
  </Carousel>
);
