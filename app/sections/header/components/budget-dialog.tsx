import Image from 'next/image';
import { BaseDialog } from '@/components/reuseable/base-dialog';
import { DialogClose } from '@/components/ui/dialog';

export function BudgetDialog({ open, setOpen }: IBudgetDialog) {
  return (
    <BaseDialog
      open={open}
      setOpen={setOpen}
      title='Create a Budget'
      description='Set up and manage your annual budgets by allocating funds across categories.'
    >
      <Image
        src='/assets/header/budget-dialog.png'
        alt='Illustration'
        width={438}
        height={213}
        className='rounded-t-[10px]'
      />

      <div className='w-[344px] flex flex-col gap-6'>
        <div className='flex flex-col gap-[23px]'>
          {dialogListItem.map((item) => (
            <DialogListCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        <DialogClose className='bg-primary text-primary-foreground hover:opacity-90 w-[344px] h-[46px] text-base font-medium leading-[140%] rounded-full transition-colors duration-500'>
          Create Budget
        </DialogClose>
      </div>
    </BaseDialog>
  );
}

function DialogListCard({ src, alt, title, description }: IDialogListCard) {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
      />
      <div className='flex flex-col gap-1'>
        <p className='font-semibold leading-[100%]'>{title}</p>
        <p className='text-xs text-secondary-foreground'>{description}</p>
      </div>
    </div>
  );
}

const dialogListItem: IDialogListCard[] = [
  {
    src: '/assets/header/b1.png',
    alt: 'Settings',
    title: 'Set up annual budgets by account category',
    description: 'Allocate funds across income and expense lines with full visibility.',
  },
  {
    src: '/assets/header/b2.png',
    alt: 'Trend up',
    title: 'Track actuals vs budget in real time',
    description: 'See how your community is performing against plan, month by month.',
  },
  {
    src: '/assets/header/b3.png',
    alt: 'Align bottom',
    title: 'Adjust figures and forecast with ease',
    description:
      'Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.',
  },
];

interface IBudgetDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface IDialogListCard {
  src: string;
  alt: string;
  title: string;
  description: string;
}
