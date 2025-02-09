import React from 'react';
import { Button } from '@/components/ui/button';

export default function FooterSection() {
  return (
    <footer className='relative bg-primary text-primary-foreground py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center space-y-8'>
          <div className='flex flex-wrap justify-center gap-6 mb-6'>
            <a
              href='/about'
              className='text-primary-foreground/90 hover:text-primary-foreground/70 transition-colors'
            >
              About Us
            </a>
            <a
              href='/contact'
              className='text-primary-foreground/90 hover:text-primary-foreground/70 transition-colors'
            >
              Contact
            </a>
          </div>
          <p className='text-sm text-primary-foreground/75'>
            © 2024 Premium Auto Detailing. All rights reserved.
          </p>
          <Button
            size='lg'
            className='bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
          >
            Schedule Detailing
          </Button>
        </div>
      </div>
    </footer>
  );
}
