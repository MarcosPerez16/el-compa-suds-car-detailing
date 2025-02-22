// src/components/sections/GallerySection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { featuredGalleryItems } from './galleryHomeData';

export default function GallerySection() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6 text-black'>
          Our Work
        </h2>
        <p className='text-lg text-black text-center mb-12 max-w-2xl mx-auto'>
          Browse through some of our recent detailing transformations
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredGalleryItems.map((item, index) => (
            <div
              key={index}
              className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>{item.title}</h3>
                  <p className='text-white/90 text-sm'>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Link href='/gallery'>
            <Button
              size='lg'
              className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
