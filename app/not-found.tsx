import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='h-full flex flex-col items-center gap-2.5 my-[150px]'>
      <p className='text-3xl font-semibold'>404 - Page Not Found</p>
      <Button asChild>
        <Link href='/'>Return to dashboard</Link>
      </Button>
    </div>
  );
}
