import { cn } from '@/lib/utils';

export function CardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col rounded-2xl border border-card-stroke bg-white', className)}>
      {children}
    </div>
  );
}
