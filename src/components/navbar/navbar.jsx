'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='font-bold text-xl flex items-center gap-2'>
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
              className='text-sm font-medium transition-colors hover:text-blue-600'
            >
              {route.label}
            </Link>
          ))}
          <Button>Book Now</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <div className='flex flex-col gap-4 mt-4'>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className='text-sm font-medium transition-colors hover:text-blue-600'
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Button className='mt-2'>Book Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
