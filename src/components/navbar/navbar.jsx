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
import { motion } from 'framer-motion';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants with slower transitions
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Increased from 0.5
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Increased from 0.1
        duration: 0.5, // Increased from 0.3
        ease: 'easeOut',
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, // Increased from 0.5
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.header
      initial='hidden'
      animate='visible'
      variants={navbarVariants}
      className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    >
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <motion.div variants={logoVariants}>
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
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-6'>
          {routes.map((route, i) => (
            <motion.div
              key={route.href}
              custom={i}
              initial='hidden'
              animate='visible'
              variants={linkVariants}
            >
              <Link
                href={route.href}
                className='text-sm font-medium text-black transition-colors hover:text-amber-500 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500'
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }} // Increased from 0.3
            >
              <Button
                variant='ghost'
                size='icon'
                className='text-black hover:text-amber-500'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetTitle className='text-black'>Navigation Menu</SheetTitle>
            <SheetDescription className='text-black/70'>
              Access all pages
            </SheetDescription>
            <div className='flex flex-col gap-4 mt-4'>
              {routes.map((route, i) => (
                <motion.div
                  key={route.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.5 }} // Increased from 0.1*i and added duration
                >
                  <Link
                    href={route.href}
                    className='text-sm font-medium text-black transition-colors hover:text-amber-500 border-l-2 border-transparent hover:border-amber-500 pl-2'
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
