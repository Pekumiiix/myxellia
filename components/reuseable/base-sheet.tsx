import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export function BaseSheet({ open, setOpen, title, description, children }: IBaseSheet) {
  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetContent className='w-[400px] border-none bg-black [&>button]:hidden'>
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>{title}</SheetTitle>
            <SheetDescription>{description}</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        {children}
      </SheetContent>
    </Sheet>
  );
}

interface IBaseSheet {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}
