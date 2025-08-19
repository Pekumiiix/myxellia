'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function CalendarComponent() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  function navigateMonth(direction: number) {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  }

  const days = getDaysInMonth(currentDate);

  return (
    <div className='min-h-[75vh] flex flex-col items-center px-[25px]'>
      <div className='w-fit flex items-center gap-[29px] mb-6'>
        <ToogleButton
          action={() => navigateMonth(-1)}
          rotate
        />

        <p className='font-semibold text-primary-foreground'>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </p>

        <ToogleButton action={() => navigateMonth(1)} />
      </div>

      <div className='w-full grid grid-cols-7 border border-y border-r border-border rounded-t-[10px]'>
        {weekDays.map((day) => (
          <div
            key={day}
            className='flex items-center h-5 border-l first:rounded-tl-[10px] border-border pl-[5px]'
          >
            <span className='text-[8px] font-medium text-[#969696] leading-[100%] uppercase font-inter'>
              {day}
            </span>
          </div>
        ))}
      </div>

      <div className='w-full min-h-full grid grid-rows-6 grid-cols-7 border-r border-border'>
        {days.map((date) => {
          const isToday = getIsToday(date);
          const isFirstOfTheMonth = date.getDate() === 1;

          return (
            <div
              key={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
              className='flex h-full border-l border-b border-border p-1.5'
            >
              <p
                className={cn(
                  'text-[10px] capitalize text-muted-foreground font-inter font-medium transition-all duration-200 hover:bg-gray-800',
                  {
                    'bg-blue-600 text-white hover:bg-blue-700 text-center w-7 h-4 rounded-full': isToday,
                    'p-0 hover:text-white bg-transparent': !isToday,
                  },
                )}
              >
                {isFirstOfTheMonth && months[date.getMonth()].slice(0, 3)} {date.getDate()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ToogleButton({ action, rotate = false }: { action: () => void; rotate?: boolean }) {
  return (
    <Button
      onClick={action}
      size='icon'
      variant='ghost'
      className={cn('size-6 hover:bg-white/10', { 'rotate-180': rotate, 'rotate-0': !rotate })}
    >
      <Play
        size={20}
        className='text-gray-400'
        width={8}
        height={14}
        fill='#98A2B3'
      />
    </Button>
  );
}

function getDaysInMonth(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());

  const days = [];
  const current = new Date(startDate);

  for (let i = 0; i < 42; i++) {
    days.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return days;
}

function getIsToday(date: Date) {
  return (
    date.getDate() === new Date().getDate() &&
    date.getMonth() === new Date().getMonth() &&
    date.getFullYear() === new Date().getFullYear()
  );
}

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
