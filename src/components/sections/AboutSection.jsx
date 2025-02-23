import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='py-20 px-4 '>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Content Side */}
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl font-bold text-black'>
              About El Compa Suds
            </h2>
            <div className='w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-80'></div>
            <p className='text-lg text-black leading-relaxed'>
              Our certified detailers use premium products and cutting-edge
              techniques to deliver unmatched results for your vehicle.
            </p>
            <p className='text-lg text-black leading-relaxed'>
              Founded in 2018, El Compa Suds has quickly become the region's
              most trusted name in automotive detailing. We combine passion for
              cars with technical expertise to restore your vehicle to showroom
              condition.
            </p>
            <div className='grid grid-cols-2 gap-4 mt-8'>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <p className='font-bold text-3xl text-amber-500'>500+</p>
                <p className='text-gray-700'>Happy Customers</p>
              </div>
              <div className='bg-white p-4 rounded-lg shadow-sm'>
                <p className='font-bold text-3xl text-amber-500'>5★</p>
                <p className='text-gray-700'>Average Rating</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className='relative h-96 md:h-full rounded-xl overflow-hidden shadow-lg'>
            <Image
              src='/images/about/image1.jpg'
              alt='El Compa Suds Detailing Team'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
