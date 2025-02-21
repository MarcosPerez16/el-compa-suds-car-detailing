import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function ServicesSection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Exterior Detailing */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service1.jpg'
                alt='Exterior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-black'>
              Exterior Detailing
            </h3>
            <p className='text-black'>
              Paint correction, ceramic coating, and wheel restoration
            </p>
          </div>

          {/* Interior Detailing */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service2.jpg'
                alt='Interior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-black'>
              Interior Detailing
            </h3>
            <p className='text-black'>
              Deep cleaning, odor removal, and leather conditioning
            </p>
          </div>

          {/* Complete Package */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service3.jpg'
                alt='Full Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3 text-black'>
              Complete Package
            </h3>
            <p className='text-black'>
              Full interior/exterior restoration with paint protection
            </p>
          </div>
        </div>

        <div className='mt-12 flex justify-center'>
          <Link href='/services'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full'
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
