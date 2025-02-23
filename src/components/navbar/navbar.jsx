'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import Image from 'next/image';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='font-bold text-xl flex items-center gap-2 text-black hover:text-amber-500 transition-colors'
        >
          <Image
            src='/images/branding/logo-img-transparent.png'
            alt='Compa Suds Logo'
            width={40}
            height={40}
            className='object-contain'
          />
          El Compa Suds
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className='text-sm font-medium text-black transition-colors hover:text-amber-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              className='text-black hover:text-amber-500'
            >
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetTitle className='text-black'>Navigation Menu</SheetTitle>
            <SheetDescription className='text-black/70'>
              Access all pages
            </SheetDescription>
            <div className='flex flex-col gap-4 mt-4'>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className='text-sm font-medium text-black transition-colors hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-2'
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
