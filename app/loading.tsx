import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <LoaderCircle
        size={100}
        className='text-blue animate-spin'
      />
    </div>
  );
}
