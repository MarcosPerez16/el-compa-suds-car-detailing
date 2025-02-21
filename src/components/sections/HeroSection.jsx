import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden'>
      {/* Banner Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/banners/HeroSectionBanner.webp'
          alt='Car Detailing Banner'
          fill
          priority
          className='object-cover brightness-50'
        />
      </div>

      {/* Content */}
      <div className='container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-primary-foreground'>
            Premium Car Detailing Services
          </h1>
          <p className='text-lg md:text-xl mb-8 text-primary-foreground/90'>
            Restore your car's showroom finish with our expert detailing
          </p>
          <Button
            size='lg'
            className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
          >
            Schedule Detailing
          </Button>
        </div>
      </div>
    </section>
  );
}
