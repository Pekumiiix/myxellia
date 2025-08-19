import { ArrowLeft, type LucideIcon, X } from 'lucide-react';
import { CalendarComponent } from '@/components/reuseable/base-calendar';
import { BaseSheet } from '@/components/reuseable/base-sheet';
import { SheetClose } from '@/components/ui/sheet';

export function CalendarSheet({ open, setOpen }: ISheetComponent) {
  return (
    <BaseSheet
      open={open}
      setOpen={setOpen}
      title='Select a Date'
      description='Choose a date from the calendar to continue.'
    >
      <div className='flex flex-col gap-[17px]'>
        <div className='w-full flex items-center justify-between bg-[#171717] py-[13px] px-[22px]'>
          <div className='flex items-center gap-2 text-primary-foreground leading-[100%] font-semibold'>
            <CloseButton icon={ArrowLeft} />

            <span>Calendar</span>
          </div>

          <CloseButton icon={X} />
        </div>

        <CalendarComponent />
      </div>
    </BaseSheet>
  );
}

function CloseButton({ icon }: { icon: LucideIcon }) {
  const Icon = icon;

  return (
    <SheetClose className='size-6'>
      <Icon
        size={24}
        color='#ffffff'
      />
    </SheetClose>
  );
}

interface ISheetComponent {
  open: boolean;
  setOpen: (open: boolean) => void;
}
