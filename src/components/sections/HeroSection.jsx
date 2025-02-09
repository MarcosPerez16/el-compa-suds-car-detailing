import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className='relative bg-primary text-primary-foreground py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Premium Car Detailing Services
          </h1>
          <p className='text-lg md:text-xl mb-8 text-primary-foreground/90'>
            Restore your cars showroom finish with our expert detailing
          </p>
          <Button
            size='lg'
            className='bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
          >
            Schedule Detailing
          </Button>
        </div>
      </div>
    </section>
  );
}
