import { BaseCarousel } from '@/components/reuseable/base-carousel';
import { firstCarouselData, secondCarouselData, thirdCarouselData } from '@/mock-data';
import OverviewSection from './sections/overview';

export default function Home() {
  return (
    <section className='max-w-[1536px] w-full flex flex-col gap-4 py-3 px-[78px]'>
      <p className='text-xl font-semibold leading-[100%]'>Welcome, Ahmed</p>

      <OverviewSection />

      <div className='w-full h-[286px] grid grid-cols-3 gap-[15px]'>
        <BaseCarousel item={firstCarouselData} />
        <BaseCarousel item={secondCarouselData} />
        <BaseCarousel item={thirdCarouselData} />
      </div>
    </section>
  );
}
