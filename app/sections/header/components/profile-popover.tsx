import { BasePopover } from '@/components/reuseable/base-popover';

export function ProfilePopover({ open, setOpen }: IProfilePopover) {
  return (
    <BasePopover
      open={open}
      setOpen={setOpen}
    >
      <div className='flex itms-center gap-2 p-2.5 rounded-[8px] border border-card-stroke'>
        <p className='size-10 flex items-center justify-center rounded-full bg-teal-900 text-[23px] font-medium leading-[130%] text-primary-foreground'>
          A
        </p>

        <div className='flex flex-col gap-1.5'>
          <p className='text-base font-medium'>Amao Pelumi</p>
          <p className='text-sm text-foreground/80'>Amaopelumi96@gmail.com</p>
        </div>
      </div>
    </BasePopover>
  );
}

interface IProfilePopover {
  open: boolean;
  setOpen: (open: boolean) => void;
}
