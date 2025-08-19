import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function BasePopover({ trigger, children, open, setOpen }: IBasePopover) {
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <div className='flex'>{trigger}</div>
      </PopoverTrigger>
      <PopoverContent className='w-[350px] border-none flex flex-col gap-1.5'>
        {children}
      </PopoverContent>
    </Popover>
  );
}

interface IBasePopover {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}
