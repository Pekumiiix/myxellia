'use client';

import { Dot } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function BaseCarousel({ item }: { item: IBaseCarousel[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const currentItem = item[current - 1] || item[0];

  return (
    <div className='relative'>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className='h-full'>
          {item.map((data) => (
            <CarouselItem
              key={data.title}
              className='w-full min-h-full rounded-xl overflow-hidden'
            >
              <div className='w-full h-[286px]'>
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={418}
                  height={286}
                  className='rounded-xl w-full min-h-full bg-red-900'
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='absolute bottom-0 w-full flex flex-col items-center px-4 z-20'>
        <div className='w-full flex flex-col text-primary-foreground leading-[100%]'>
          <p className='text-sm font-medium uppercase'>{currentItem.title}</p>
          <p className='text-lg font-semibold'>{currentItem.description}</p>
        </div>
        <div className='flex items-center -space-x-3'>
          {Array.from({ length: count }).map((_, index) => (
            <Dot
              key={item[index].title}
              color={current === index + 1 ? '#ffffff' : '#737373'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export interface IBaseCarousel {
  src: string;
  alt: string;
  title: string;
  description: string;
}
