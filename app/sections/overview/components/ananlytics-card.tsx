import { FormatNumber } from '@chakra-ui/react';
import { TrendIcon } from '@/components/icons/trend';
import { cn } from '@/lib/utils';
import { CardWrapper } from './card-wrapper';

export function AnalyticsCard({ amount, title, percentageChange, trend }: IAnalytics) {
  return (
    <CardWrapper className='rounded-xl py-[13px] px-[15px] flex flex-col justify-center gap-2'>
      <p
        className={cn('text-[19px] font-semibold leading-[130%]', {
          'text-blue': trend === 'up',
          'text-[#12B76A]': trend === 'moderate-up',
          'text-teal-500': trend === 'moderate-down',
          'text-error-500': trend === 'down',
        })}
      >
        ₦{amount.toFixed(2).toLocaleString()}
      </p>
      <div className='flex items-center gap-[7px]'>
        <p className='text-[10px] font-medium leading-[100%] text-deep-grey'>{title}</p>
        <div
          className={cn('flex items-center gap-1', {
            'fill-[#12B76A] text-[#12B76A]': trend === 'up' || trend === 'moderate-up',
            'fill-teal-500 text-teal-500': trend === 'moderate-down',
            'fill-error-500 text-error-500': trend === 'down',
          })}
        >
          <TrendIcon
            className={cn('fill-current', {
              'rotate-180': trend !== 'up' && trend !== 'moderate-up',
            })}
          />
          <p className='text-[10px] text-inherit leading-[100%]'>
            <FormatNumber
              value={percentageChange}
              style='percent'
              maximumFractionDigits={1}
              minimumFractionDigits={1}
            />
          </p>
        </div>
      </div>
    </CardWrapper>
  );
}

export interface IAnalytics {
  amount: number;
  title: string;
  trend: 'up' | 'down' | 'moderate-down' | 'moderate-up';
  percentageChange: number;
}
