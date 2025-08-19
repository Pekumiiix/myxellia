'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input, InputWrapper } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { navLink } from '@/mock-data';
import Image from 'next/image';

export function NavBar() {
  const pathname = usePathname();

  return (
    <div className='w-full flex justify-center bg-background border-b border-gray-100'>
      <nav className='max-w-[1536px] w-full flex items-center justify-between gap-[31px] py-3.5 px-[78px]'>
        <div className='w-[934px] flex items-center justify-between'>
          {navLink.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavLinks
                key={item.name}
                {...item}
                isActive={isActive}
              />
            );
          })}
        </div>

        <InputWrapper className='max-w-[319px] w-full h-[43px] gap-2 px-4 py-2.5 bg-accent rounded-xl border border-light-grey shadow-none'>
          <Search
            size={24}
            color='#3D3D3D'
          />

          <Input
            type='email'
            placeholder='Search listing'
            className='text-xs leading-[100%] font-light placeholder:text-semi-grey rounded-none h-full'
          />
        </InputWrapper>
      </nav>
    </div>
  );
}

function NavLinks({ href, icon, name, isActive }: INavLinkProps & { isActive: boolean }) {
  return (
    <Button
      asChild
      variant='ghost'
      className={cn(
        'w-fit flex items-center gap-2 text-sm leading-[100%] rounded-[8px] py-[7px] !px-[33px]',
        {
          'bg-accent text-foreground font-semibold': isActive,
          'text-deep-grey hover:bg-accent font-normal': !isActive,
        },
      )}
    >
      <Link href={href}>
        <Image src={icon.src} alt={icon.alt} width={24} height={24} />
        <p>{name}</p>
      </Link>
    </Button>
  );
}

export interface INavLinkProps {
  href: string;
  icon: {src: string, alt: string};
  name: string;
}
