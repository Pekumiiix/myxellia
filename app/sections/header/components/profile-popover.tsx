import { Contact, LockKeyhole, LogOut, type LucideIcon, ShieldCheck, Users } from 'lucide-react';
import { BasePopover } from '@/components/reuseable/base-popover';
import { Button } from '@/components/ui/button';

export function ProfilePopover({ trigger, open, setOpen }: IProfilePopover) {
  return (
    <BasePopover
      trigger={trigger}
      open={open}
      setOpen={setOpen}
    >
      <div className='flex items-center gap-2 p-2.5 rounded-[8px] bg-muted border border-card-stroke'>
        <p className='size-10 flex items-center justify-center rounded-full bg-teal-900 text-[23px] font-medium leading-[130%] text-primary-foreground'>
          A
        </p>

        <div className='flex flex-col'>
          <p className='text-base font-medium'>Amao Pelumi</p>
          <p className='text-sm text-foreground/80'>Amaopelumi96@gmail.com</p>
        </div>
      </div>

      {[
        { icon: Users, name: 'Team' },
        { icon: Contact, name: 'Contact Persons' },
        { icon: LockKeyhole, name: 'Change password' },
        { icon: ShieldCheck, name: '2 - Factor Authentication' },
        { icon: LogOut, name: 'Log Out' },
      ].map((item) => (
        <PopoverButtons
          key={item.name}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </BasePopover>
  );
}

function PopoverButtons({ icon, name }: IPopoverButtons) {
  const Icon = icon;

  return (
    <Button
      variant='ghost'
      className='w-full rounded-none border-b last:border-none last:text-red-500 border-card-stroke hover:bg-card-stroke last:hover:bg-red-100 last:hover:text-red-500 flex items-center justify-start gap-2 py-6'
    >
      <Icon size={24} />
      <span>{name}</span>
    </Button>
  );
}

interface IPopoverButtons {
  icon: LucideIcon;
  name: string;
}

interface IProfilePopover {
  trigger: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
}
