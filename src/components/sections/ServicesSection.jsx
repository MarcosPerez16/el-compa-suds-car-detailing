import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export default function ServicesSection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-black'>
          Our Top Services
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Exterior Detailing */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service1.webp'
                alt='Exterior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-xl font-semibold text-black'>
                Exterior Detailing
              </h3>
              <span className='text-amber-500 font-medium'>From $149</span>
            </div>
            <p className='text-black'>
              Paint correction, ceramic coating, and wheel restoration
            </p>
          </div>

          {/* Interior Detailing */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative'>
            {/* Popular badge */}
            <div className='absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10'>
              MOST POPULAR
            </div>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service2.webp'
                alt='Interior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-xl font-semibold text-black'>
                Interior Detailing
              </h3>
              <span className='text-amber-500 font-medium'>From $129</span>
            </div>
            <p className='text-black'>
              Deep cleaning, odor removal, and leather conditioning
            </p>
          </div>

          {/* Complete Package */}
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative'>
            {/* Best value badge */}
            <div className='absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10'>
              BEST VALUE
            </div>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service-full3.jpg'
                alt='Full Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-xl font-semibold text-black'>
                Complete Package
              </h3>
              <span className='text-amber-500 font-medium'>From $249</span>
            </div>
            <p className='text-black'>
              Full interior/exterior restoration with paint protection
            </p>
          </div>
        </div>

        <div className='mt-12 flex justify-center w-full'>
          <Link href='/services' className='w-full sm:w-auto'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full'
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
