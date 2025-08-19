import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function BaseDialog({ open, setOpen, title, description, children }: IBaseDialog) {
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogContent className='w-[438px] flex flex-col items-center gap-6 px-0 pt-0 pb-6 rounded-[10px] border-none [&>button]:hidden'>
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
}

interface IBaseDialog {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}
