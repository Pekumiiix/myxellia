import { Popover, PopoverContent } from '@/components/ui/popover';

export function BasePopover({ open, setOpen, children }: IBasePopover) {
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}

interface IBasePopover {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}
