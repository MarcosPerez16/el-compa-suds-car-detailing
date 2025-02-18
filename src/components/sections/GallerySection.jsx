// src/components/sections/GallerySection.jsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function GallerySection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent'>
          Our Work
        </h2>
        <p className='text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
          Browse through some of our recent detailing transformations
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Gallery Item 1 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/paint-correction.jpeg'
              alt='Exterior Detail Transformation'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Paint Correction</h3>
                <p className='text-white/90 text-sm'>Exterior Detail</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/Interior-revival.jpg'
              alt='Interior Detail Transformation'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Interior Revival</h3>
                <p className='text-white/90 text-sm'>
                  Full Interior Restoration
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/ceramic-coating.jpg'
              alt='Ceramic Coating Application'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Ceramic Coating</h3>
                <p className='text-white/90 text-sm'>Paint Protection</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/wheel-restoration.jpg'
              alt='Wheel Detail'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Wheel Restoration</h3>
                <p className='text-white/90 text-sm'>Wheel & Tire Detail</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/engine-bay.jpg'
              alt='Engine Bay Detail'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Engine Bay Detail</h3>
                <p className='text-white/90 text-sm'>Engine Cleaning</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'>
            <Image
              src='/images/gallery/complete-detail.jpg'
              alt='Full Detail Package'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover transition-transform duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-white font-semibold'>Complete Package</h3>
                <p className='text-white/90 text-sm'>
                  Full Vehicle Transformation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-12'>
          <Button asChild size='lg' className='rounded-full'>
            <a href='/gallery'>View Full Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
