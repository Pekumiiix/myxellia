'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Bar } from 'recharts';
import { BasebarChartWrapper } from '@/components/reuseable/base-bar-chart';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { chartConfig, chartData, data } from '@/mock-data';
import { AnalyticsCard } from './components/ananlytics-card';
import { CardWrapper } from './components/card-wrapper';

export function SalesOverview() {
  const [filter, setFilter] = useState<string>('1 year');

  return (
    <CardWrapper className='col-span-2'>
      <div className='w-full pb-3 border-b border-card-stroke py-4 px-[22px]'>
        <div className='flex flex-col items-end gap-[17px]'>
          <div className='w-full flex items-end justify-between'>
            <div className='flex flex-col gap-3'>
              <p className='text-xl font-semibold'>Sales Overview</p>
              <p className='text-xs leading-[100%] text-mid-gray'>
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>

            <Button
              variant='outline'
              className='w-[177px] h-[46px] text-xs font-medium !border-gray-300 rounded-full shadow-none'
            >
              View Transactions
            </Button>
          </div>

          <div className='flex gap-3'>
            {['1 week', '1 month', '1 year'].map((item) => {
              const isSelected = filter === item;

              return (
                <Button
                  key={item}
                  onClick={() => setFilter(item)}
                  variant='ghost'
                  className={cn('text-sm font-semibold leading-[100%] text-deep-grey', {
                    'bg-accent font-semibold': isSelected,
                    'font-normal': !isSelected,
                  })}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-4 pb-[18px] pl-2 pr-[22px] gap-5'>
        <SalesChart />

        <div className='grid grid-cols-2 gap-x-4 gap-y-3.5'>
          {data.map((item) => (
            <AnalyticsCard
              key={item.title}
              amount={item.amount}
              trend={item.trend}
              title={item.title}
              percentageChange={item.percentageChange}
            />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

function SalesChart() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  function checkScrollability() {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);

      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, []);

  function scrollLeft() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -50,
        behavior: 'smooth',
      });
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 50,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className='flex items-center gap-[13px]'>
      <ScrollButton
        action={() => scrollLeft()}
        disabled={!canScrollLeft}
      />

      <div
        ref={scrollContainerRef}
        className='w-full overflow-x-auto scrollbar-none relative z-30'
      >
        <BasebarChartWrapper
          config={chartConfig}
          data={chartData}
          chartProps={{ barSize: 4, margin: { left: -30, bottom: -15 }, width: 350 }}
          classNames={{
            container: 'h-[160px] min-w-[350px]',
            axis: 'text-[10px] font-medium leading-[100%] text-semi-grey',
          }}
          Yaxis={{
            tickFormatter: (value) => `${value}m`,
            domain: [0, 50],
            ticks: [0, 10, 20, 30, 40, 50],
            axisLine: { strokeWidth: 1, stroke: '#E4E4E4' },
          }}
          Xaxis={{ tickFormatter: (value) => value.slice(0, 3), dataKey: 'month' }}
        >
          <Bar
            dataKey='desktop'
            fill='var(--color-desktop)'
          />
          <Bar
            dataKey='mobile'
            fill='var(--color-mobile)'
          />
          <Bar
            dataKey='tablet'
            fill='var(--color-tablet)'
          />
        </BasebarChartWrapper>
      </div>

      <ScrollButton
        action={() => scrollRight()}
        disabled={!canScrollRight}
        rotate
      />
    </div>
  );
}

function ScrollButton({ action, rotate, disabled }: IScrollButton) {
  return (
    <Button
      onClick={action}
      disabled={disabled}
      size='icon'
      className={cn(
        'size-[18px] flex items-center justify-center aspect-square rounded-full bg-accent hover:bg-black/10',
        {
          'rotate-180': rotate,
          'rotate-0': !rotate,
        },
      )}
    >
      <Image
        src='/assets/main/arrow-head.png'
        alt='Arrow left'
        width={5}
        height={5}
        className={rotate ? 'mr-0.5' : 'mr-[3px]'}
      />
    </Button>
  );
}

interface IScrollButton {
  action: () => void;
  rotate?: boolean;
  disabled?: boolean;
}
