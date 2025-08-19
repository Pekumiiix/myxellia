import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export function BaseTooltip({
  trigger,
  children,
  variant = 'black',
  className,
  action,
}: IBaseTooltip) {
  return (
    <Tooltip>
      <TooltipTrigger
        onClick={action}
        className={className}
      >
        {trigger}
      </TooltipTrigger>
      <TooltipContent
        className={cn('flex flex-col gap-1.5', {
          'bg-grey-900 text-[10px] text-white leading-[150%] tracking-[3%]': variant === 'black',
          'bg-gray-300': variant === 'grey',
        })}
      >
        {children}
      </TooltipContent>
    </Tooltip>
  );
}

interface IBaseTooltip {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'black' | 'grey';
  className?: string;
  action?: () => void;
}
