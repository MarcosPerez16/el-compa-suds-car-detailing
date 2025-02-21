'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/PageBanner';
import { Button } from '@/components/ui/button';

export default function GalleryPage() {
  // Create breadcrumbs for the Gallery page
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/gallery' },
  ];

  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Example gallery items - you can expand this with more items
  const galleryItems = [
    {
      src: '/images/gallery/paint-correction.jpeg',
      alt: 'Exterior Detail Transformation',
      title: 'Paint Correction',
      category: 'Exterior',
    },
    {
      src: '/images/gallery/Interior-revival.jpg',
      alt: 'Interior Detail Transformation',
      title: 'Interior Revival',
      category: 'Interior',
    },
    {
      src: '/images/gallery/ceramic-coating.jpg',
      alt: 'Ceramic Coating Application',
      title: 'Ceramic Coating',
      category: 'Ceramic Coating',
    },
    {
      src: '/images/gallery/wheel-restoration.jpg',
      alt: 'Wheel Detail',
      title: 'Wheel Restoration',
      category: 'Exterior',
    },
    {
      src: '/images/gallery/engine-bay.jpg',
      alt: 'Engine Bay Detail',
      title: 'Engine Bay Detail',
      category: 'Engine Cleaning',
    },
    {
      src: '/images/gallery/complete-detail.jpg',
      alt: 'Full Detail Package',
      title: 'Complete Package',
      category: 'Paint Protection',
    },
    // Add more gallery items here to expand the gallery page
    {
      src: '/images/gallery/paint-correction.jpeg',
      alt: 'Exterior Detail Transformation 2',
      title: 'Paint Restoration',
      category: 'Exterior',
    },
    {
      src: '/images/gallery/Interior-revival.jpg',
      alt: 'Interior Detail Transformation 2',
      title: 'Leather Restoration',
      category: 'Interior',
    },
    {
      src: '/images/gallery/ceramic-coating.jpg',
      alt: 'Ceramic Coating Application 2',
      title: 'Premium Coating',
      category: 'Paint Protection',
    },
    {
      src: '/images/gallery/paint-correction.jpeg',
      alt: 'Exterior Detail Transformation 2',
      title: 'Paint Restoration',
      category: 'Exterior',
    },
    {
      src: '/images/gallery/Interior-revival.jpg',
      alt: 'Interior Detail Transformation 2',
      title: 'Leather Restoration',
      category: 'Interior',
    },
    {
      src: '/images/gallery/ceramic-coating.jpg',
      alt: 'Ceramic Coating Application 2',
      title: 'Premium Coating',
      category: 'Paint Protection',
    },
  ];

  // Get unique categories for filter buttons
  const categories = [
    'All',
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  // Filter gallery items based on active filter
  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <main>
      {/* Add the PageBanner at the top */}
      <PageBanner
        title='Gallery'
        subtitle=''
        isHomePage={false}
        breadcrumbs={breadcrumbs}
      />

      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-black'>
              Our Work Showcase
            </h2>
            <p className='text-lg text-black max-w-3xl mx-auto'>
              Browse through our portfolio of detailing transformations and see
              the quality of our work. Each project represents our commitment to
              excellence.
            </p>
          </div>

          {/* Filter buttons */}
          <div className='flex flex-wrap gap-2 justify-center mb-10'>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'solid' : 'outline'} // Change variant to 'solid' for active state
                className={`rounded-full ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'border-black text-black'
                }`} // Add custom styles for active/inactive buttons
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredItems.map((item, index) => (
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

          {/* Call to Action */}
          <div className='text-center mt-16'>
            <h3 className='text-2xl font-bold text-black mb-4'>
              Ready to experience our detailing services?
            </h3>
            <p className='text-lg text-black mb-6'>
              Schedule your appointment today and let us transform your vehicle
            </p>
            <div className='flex justify-center'>
              <Link href='/contact'>
                <Button
                  size='lg'
                  className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
                >
                  Request A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
