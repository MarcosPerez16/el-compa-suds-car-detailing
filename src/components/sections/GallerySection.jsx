'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { featuredGalleryItems } from './galleryHomeData';
import { motion, useInView } from 'framer-motion';

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -200px 0px', // Trigger earlier when scrolling
  });

  // Track touched items for mobile
  const [touchedItem, setTouchedItem] = useState(null);

  // Animation variants with slower transitions
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: 'easeOut',
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + index * 0.15,
        duration: 0.9,
        ease: 'easeOut',
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const buttonHoverVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.5 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  // Handle touch events for mobile
  const handleTouch = (index) => {
    if (touchedItem === index) {
      setTouchedItem(null); // Toggle off if already selected
    } else {
      setTouchedItem(index); // Toggle on
    }
  };

  return (
    <section className='py-20 px-4' ref={ref}>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-6 text-black'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={titleVariants}
        >
          Our Work
        </motion.h2>

        <motion.p
          className='text-lg text-black text-center mb-12 max-w-2xl mx-auto'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={descriptionVariants}
        >
          Browse through some of our recent detailing transformations
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {featuredGalleryItems.map((item, index) => (
            <motion.div
              key={index}
              className='group relative aspect-square overflow-hidden rounded-xl cursor-pointer'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              custom={index}
              variants={galleryItemVariants}
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              onClick={() => handleTouch(index)}
              onTouchStart={() => handleTouch(index)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                  touchedItem === index
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-white font-semibold'>{item.title}</h3>
                  <p className='text-white/90 text-sm'>{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center mt-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={buttonVariants}
        >
          <Link href='/gallery' className='w-full sm:w-auto inline-block'>
            <motion.div
              whileHover='hover'
              whileTap='tap'
              variants={buttonHoverVariants}
            >
              <Button
                size='lg'
                className='bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full w-full sm:w-auto'
              >
                View Full Gallery
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
