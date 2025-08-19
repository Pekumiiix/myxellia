import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CardWrapper } from './card-wrapper';
import Image from 'next/image';

export function OverviewCard({ name, icon, stats }: IOverViewProps) {
  return (
    <CardWrapper>
      <div className='w-full flex items-center justify-between px-4 py-[13px] bg-[#F9FAFB] rounded-t-2xl'>
        <div className='flex items-center gap-2.5'>
          <Image src={icon.src} alt={icon.alt} width={24} height={24} />
          <p className='text-sm font-medium text-gray-800'>{name}</p>
        </div>

        <Link
          href='#'
          className='flex items-center gap-0.5 text-blue textxs font-medium leading-[100%]'
        >
          <span>View all</span>
          <ChevronRight size={18} />
        </Link>
      </div>
      <div className='w-full flex items-center justify-between px-4 pt-5 pb-4'>
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </CardWrapper>
  );
}

function StatCard({ title, value }: IStats) {
  return (
    <div className='w-[100px] flex flex-col gap-2'>
      <p className='text-sm font-medium leading-5 text-gray-600'>{title}</p>
      <p className='text-2xl leading-[38px] font-semibold text-gray-900'>{value}</p>
    </div>
  );
}

interface IStats {
  title: string;
  value: string;
}

interface IOverViewProps {
  name: string;
  icon: {src: string, alt: string};
  stats: IStats[];
}
