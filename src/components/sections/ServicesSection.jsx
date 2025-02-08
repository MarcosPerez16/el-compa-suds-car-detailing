// src/components/sections/ServicesSection.jsx
import React from 'react';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className='py-20 px-4 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-[#1a365d]'>
          Our Services
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service1.jpg'
                alt='Exterior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Exterior Detailing</h3>
            <p className='text-gray-600'>
              Paint correction, ceramic coating, and wheel restoration
            </p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service2.jpg'
                alt='Interior Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Interior Detailing</h3>
            <p className='text-gray-600'>
              Deep cleaning, odor removal, and leather conditioning
            </p>
          </div>

          <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative aspect-square w-full mb-4 rounded-lg overflow-hidden'>
              <Image
                src='/images/services/service3.jpg'
                alt='Full Detailing'
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
              />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Complete Package</h3>
            <p className='text-gray-600'>
              Full interior/exterior restoration with paint protection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
