'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BaseTooltip } from '@/components/reuseable/base-tooltip';
import { Button } from '@/components/ui/button';
import { BudgetDialog } from './components/budget-dialog';
import { CalendarSheet } from './components/calendar-sheet';
import { ProfilePopover } from './components/profile-popover';

export function TopHeader() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);

  return (
    <div className='w-full flex justify-center bg-primary'>
      <div className='max-w-[1536px] w-full flex items-center justify-between py-[21px] px-[78px] bg-transparent'>
        <Image
          src='/assets/logo.png'
          alt='Logo'
          width={153}
          height={26}
        />

        <div className='flex items-center gap-[25px]'>
          <div className='flex items-center gap-6'>
            <MenuButton
              src='/assets/header/notification-bell.png'
              alt='Notification'
            />

            <ActionMenuButtons
              src='/assets/header/budget.png'
              alt='Budget'
              text='Budget'
              action={() => setDialogOpen(true)}
            />

            <ActionMenuButtons
              src='/assets/header/calendar.png'
              alt='Calendar'
              text='Calendar'
              action={() => setSheetOpen(true)}
            />

            <MenuButton
              src='/assets/header/message.png'
              alt='Message'
            />
          </div>

          <ProfilePopover
            open={popoverOpen}
            setOpen={setPopoverOpen}
            trigger={<ProfileButton open={popoverOpen} />}
          />
        </div>

        <BudgetDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
        />
        <CalendarSheet
          open={sheetOpen}
          setOpen={setSheetOpen}
        />
      </div>
    </div>
  );
}

function MenuButton({ src, alt, action }: IMenuButtons) {
  return (
    <Button
      size='icon'
      className='size-8'
      onClick={action}
    >
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
      />
    </Button>
  );
}

function ActionMenuButtons({ src, alt, action, text }: IActionMenuButtonProps) {
  return (
    <BaseTooltip
      classNames={{ trigger: 'size-8' }}
      action={action}
      trigger={
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
        />
      }
    >
      <p>{text}</p>
    </BaseTooltip>
  );
}

function ProfileButton({ open }: { open: boolean }) {
  return (
    <BaseTooltip
      classNames={{
        trigger:
          'size-10 flex items-center justify-center rounded-full bg-background text-[23px] font-medium leading-[130%] text-black hover:bg-background/90',
        content: open ? 'hidden' : 'flex',
      }}
      trigger='A'
      variant='grey'
    >
      {!open && (
        <div className='flex flex-col text-foreground gap-1'>
          <p className='text-base font-medium'>Amao Pelumi</p>
          <p className='text-sm text-foreground/80'>Amaopelumi69@gmail.com</p>
        </div>
      )}
    </BaseTooltip>
  );
}

interface IMenuButtons {
  src: string;
  alt: string;
  action?: () => void;
}

interface IActionMenuButtonProps extends IMenuButtons {
  text: string;
}
